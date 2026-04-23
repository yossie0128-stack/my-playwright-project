import fs from "fs";

const history = JSON.parse(fs.readFileSync("history-data.json", "utf-8"));

const dates = history.map(h => h.date);
const totalFlakyRates = history.map(h => {
  const totalSuccess = h.summary.reduce((a, b) => a + b.success, 0);
  const totalFail = h.summary.reduce((a, b) => a + b.fail, 0);
  const total = totalSuccess + totalFail;
  return total === 0 ? 0 : (totalFail / total) * 100;
});

const html = `
<html>
<head>
  <title>Flaky History Report</title>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
  <h1>Flaky Rate History</h1>
  <canvas id="chart" width="800" height="400"></canvas>

  <script>
    const ctx = document.getElementById('chart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ${JSON.stringify(dates)},
        datasets: [{
          label: 'Flaky Rate (%)',
          data: ${JSON.stringify(totalFlakyRates)},
          borderColor: 'red',
          fill: false
        }]
      }
    });
  </script>
</body>
</html>
`;

fs.writeFileSync("history-report.html", html);
console.log("Generated history-report.html");
