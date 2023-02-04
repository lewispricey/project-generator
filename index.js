const makeJS = require("./controllers/generate-js");
const checkArgs = require("./utils/checkArgs");
const args = [...process.argv.splice(2)];

const runGenerator = (args) => {
  const { projectName, remoteURL, err } = checkArgs(args);
  if (err) return;

  makeJS(projectName, remoteURL);
};

runGenerator(args);
