const concordance1 = require("./concordance1");
const concordance2 = require("./concordance2");
const loadData = require("./loadData");
const fs = require("fs");
const cliProgress = require("cli-progress");
const algo1 = require("./algo1");
const algo2 = require("./algo2");

async function averages() {
  const loadingBar = new cliProgress.SingleBar(
    {},
    cliProgress.Presets.shades_classic
  );
  const processes = [...process.argv];
  // data is fetched
  const data = await loadData(processes[3]);

  /**
   * node filesystem @https://nodejs.org/api/fs.html
   * data.json is written below for reference
   */
  const stringData = JSON.stringify(data);
  fs.writeFile("./data.json", stringData, (err) =>
    console.log(`${err ? err : "\ndata.json written successfully!"}`)
  );

  let time1 = 0;
  let time2 = 0;
  const max = processes[2] || 100;
  console.log("Running your algos...");
  loadingBar.start(max, 0);

  /**
   * to exit the demo and test your algos, replace con1 and con2 with
   * algo1 and algo2
   */
  for (let i = 1; i <= max; i++) {
    loadingBar.update(i);
    time1 += concordance1([...data]);
    time2 += concordance2([...data]);
  }
  loadingBar.stop();

  let average1 = time1 / max;
  let average2 = time2 / max;

  if (average1 >= 1000) {
    average1 = `${(average1 / 1000).toFixed(5)}s`;
  } else {
    average1 = `${average1}ms`;
  }

  if (average2 >= 1000) {
    average2 = `${(average2 / 1000).toFixed(5)}s`;
  } else {
    average2 = `${average2}ms`;
  }

  console.log("\nAVERAGES");
  console.log("------------------------------");
  console.log(`Algo One: ${average1}`);
  console.log(`Algo Two: ${average2}`);
}

averages();
