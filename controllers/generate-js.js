const makeFolder = require("../utils/make-folder");
const makeFile = require("../utils/make-file");
const bashCommand = require("../utils/execute-bash");
const readFile = require("../utils/read-file");
const pushToRemote = require("../utils/push-to-remote");

function jsGenerator(projectName, remoteURL) {
  return makeFolder(projectName)
    .then((res) => {
      console.log("✅ Project Folder Created! \n");
      console.log("🔨 Creating Spec Folder...");
      return makeFolder(`${projectName}/spec`);
    })
    .then((res) => {
      console.log("✅ Spec Folder Created! \n");
      console.log("🔨 Creating tests Folder...");
      return makeFolder(`${projectName}/__tests__`);
    })
    .then(() => {
      console.log("✅ Tests Folder Created! \n");
      console.log("🔨 Creating README file...");
      return makeFile(`${projectName}/README.md`, `# ${projectName}`);
    })
    .then(() => {
      console.log("✅ README file created! \n");
      console.log("🔨 Creating gitignore file...");
      return makeFile(`${projectName}/.gitignore`, `node_modules`);
    })
    .then(() => {
      console.log("✅ gitignore file created \n");
      console.log("🔨 Creating index.js file...");
      return makeFile(`${projectName}/index.js`);
    })
    .then(() => {
      console.log("✅ index.js file created \n");
      console.log("🔨 Creating index.test.js file...");
      return makeFile(`${projectName}/__tests__/index.test.js`);
    })
    .then(() => {
      console.log("✅ index.test.js File Created \n");
      console.log("🔨 Initialising directory as a git Repo...");
      return bashCommand(`cd ${projectName}; git init`);
    })
    .then(() => {
      console.log("✅ Initialised Project As A Git Repo \n");
      console.log("🔨 Initialising directory with npm...");
      return bashCommand(`cd ${projectName}; npm init -y`);
    })
    .then(() => {
      console.log("✅ Initialised Project With npm \n");
      console.log("🔨 Installing Jest...");
      return bashCommand(`cd ${projectName}; npm i jest -D`);
    })
    .then(() => {
      console.log("✅ Installed Jest \n");
      console.log("🔨 Setting Jest as test script...");
      return readFile(`${projectName}/package.json`);
    })
    .then((packageData) => {
      const parsedPackage = JSON.parse(packageData);
      parsedPackage.scripts.test = "jest";
      return makeFile(
        `${projectName}/package.json`,
        JSON.stringify(parsedPackage)
      );
    })
    .then(() => {
      console.log("✅ test script set as Jest \n");
      if (remoteURL) {
        return pushToRemote(projectName, remoteURL);
      }
    })
    .then(() => {
      console.log("--- Project Generated Successfully ---");
    })
    .catch((err) => {
      console.log("--- Project Generation Failed ❌ ---");
      console.log("ERROR: ", err);
    });
}

module.exports = jsGenerator;
