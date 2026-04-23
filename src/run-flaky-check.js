import { execSync } from "child_process";
import fs from "fs";

const RUNS = 3;
const aggregated = {}; // { "test title": { success: X, fail: Y } }

for (let i = 1; i <= RUNS; i++) {
  console.log(`\n[${i}/${RUNS}] Running tests with config...`);

  let output;
  try {
    output = execSync("npx playwright test --reporter=json", {
      encoding: "utf-8",
      stdio: "pipe",
    });
  } catch (e) {
    // Playwright exits with non-zero code if any test fails
    output = e.stdout?.toString() || "";
  }

  let json;
  try {
    json = JSON.parse(output);
  } catch (e) {
    console.error("Failed to parse Playwright JSON output:", e);
    continue;
  }

  // === ここが重要：失敗したテストを即時にコンソールへ出す ===
  console.log(`\n❌ Failed tests in run ${i}:`);
  let failedThisRun = 0;

  json.suites.forEach((suite) => {
    suite.specs.forEach((spec) => {
      const title = spec.title;
      const status = spec.ok ? "success" : "fail";

      // 集計
      if (!aggregated[title]) {
        aggregated[title] = { success: 0, fail: 0 };
      }
      aggregated[title][status]++;

      // 失敗したテストを表示
      if (!spec.ok) {
        console.log(`  - ${title}`);
        failedThisRun++;
      }
    });
  });

  if (failedThisRun === 0) {
   // console.log("  (none)");
  }
}

// === flaky 集計 ===
const summary = Object.entries(aggregated).map(([title, r]) => {
  const total = r.success + r.fail;
  return {
    title,
    success: r.success,
    fail: r.fail,
    flakyRate: (r.fail / total) * 100,
  };
});

// JSON 出力
fs.writeFileSync("flaky-tests.json", JSON.stringify(summary, null, 2));

console.log("\n=== Final Flaky Summary ===");
console.table(summary);
