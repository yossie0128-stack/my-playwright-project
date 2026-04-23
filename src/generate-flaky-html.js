import fs from "fs";

const summary = JSON.parse(fs.readFileSync("flaky-summary.json", "utf-8"));

const html = `
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8" />
  <title>Flaky Test Report</title>
  <style>
    body { font-family: sans-serif; padding: 20px; }
    h1 { color: #333; }
    table { border-collapse: collapse; width: 100%; margin-top: 20px; }
    th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
    th { background: #f5f5f5; }
    tr.fail { background: #ffe5e5; }
    tr.stable { background: #e8ffe8; }
  </style>
</head>
<body>
  <h1>Flaky Test Report</h1>
  <p>Generated at: ${new Date().toLocaleString()}</p>

  <table>
    <tr>
      <th>Test Title</th>
      <th>Success</th>
      <th>Fail</th>
      <th>Flaky Rate (%)</th>
    </tr>

    ${summary
      .map((t) => {
        const cls = t.flakyRate > 0 ? "fail" : "stable";
        return `
        <tr class="${cls}">
          <td>${t.title}</td>
          <td>${t.success}</td>
          <td>${t.fail}</td>
          <td>${t.flakyRate.toFixed(1)}</td>
        </tr>`;
      })
      .join("")}
  </table>
</body>
</html>
`;

fs.writeFileSync("flaky-report.html", html);
console.log("HTML report generated: flaky-report.html");
