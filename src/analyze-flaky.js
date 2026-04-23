import fs from "fs";

const json = JSON.parse(fs.readFileSync("artifacts/playwright-json-result/result.json", "utf-8"));

const results = {};

function walkSuite(suite) {
  if (suite.specs) {
    suite.specs.forEach(spec => {
      const title = spec.title;

      if (!results[title]) {
        results[title] = { success: 0, fail: 0 };
      }

      // tests[] の中を見る
      spec.tests.forEach(test => {
        test.results.forEach(r => {
          if (r.status === "passed") {
            results[title].success++;
          } else {
            results[title].fail++;
          }
        });
      });
    });
  }

  if (suite.suites) {
    suite.suites.forEach(walkSuite);
  }
}

json.suites.forEach(walkSuite);

const summary = Object.entries(results).map(([title, r]) => {
  const total = r.success + r.fail;
  return {
    title,
    success: r.success,
    fail: r.fail,
    flakyRate: total === 0 ? 0 : (r.fail / total) * 100
  };
});

fs.writeFileSync("flaky-summary.json", JSON.stringify(summary, null, 2));
console.log("Generated flaky-summary.json");
