import * as fileHandler from './fileHandler.js';

async function main() {
  // Test readFilePromise
  fileHandler.readFilePromise('writeAhead.log').then((result) => console.log(result));

  // Test readFileAwait
  const awaitData = await fileHandler.readFileAwait('os.log');
  console.log(awaitData);

  // Test writeFile
  // fileHandler.writeFile('fullLog.log', promiseData);
  fileHandler.writeFile('fullLog.log', awaitData);
}

main();
