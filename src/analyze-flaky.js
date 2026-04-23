import fs from "fs";
import path from "path";

const results = {};
const artifactsDir = "artifacts";

function walkSuite(suite) {
  if (suite.specs) {
    suite.specs.forEach((spec) => {
      const title = spec.title;
      const status = spec.ok ? "success" : "fail";

      if (!results[title]) {
        results[title] = { success: 0, fail: 0 };
      }
      results[title][status]++;
    });
  }

  if (suite.suites) {
    suite.suites.forEach(walkSuite);
  }
}

const files = fs.readdirSync(artifactsDir);

files.forEach((folder) => {
  const resultPath = path.join(artifactsDir, folder, "result.json");
  if (!fs.existsSync(resultPath)) return;

  const json = JSON.parse(fs.readFileSync(resultPath, "utf-8"));

  if (json.suites) {
    json.suites.forEach(walkSuite);
  }
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
console.log("Generated flaky-summary.json");
