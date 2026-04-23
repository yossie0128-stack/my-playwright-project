import fs from "fs";
import path from "path";

const artifactsDir = "artifacts";
const results = {}; // { title: { success: X, fail: Y } }

const files = fs.readdirSync(artifactsDir);

files.forEach((folder) => {
  const resultPath = path.join(artifactsDir, folder, "result.json");
  if (!fs.existsSync(resultPath)) return;

  const json = JSON.parse(fs.readFileSync(resultPath, "utf-8"));

  json.suites.forEach((suite) => {
    suite.specs.forEach((spec) => {
      const title = spec.title;
      const status = spec.ok ? "success" : "fail";

      if (!results[title]) {
        results[title] = { success: 0, fail: 0 };
      }
      results[title][status]++;
    });
  });
});

const summary = Object.entries(results).map(([title, r]) => {
  const total = r.success + r.fail;
  return {
    title,
    success: r.success,
    fail: r.fail,
    flakyRate: (r.fail / total) * 100,
  };
});

fs.writeFileSync("flaky-summary.json", JSON.stringify(summary, null, 2));

console.log("=== Flaky Summary ===");
console.table(summary);
