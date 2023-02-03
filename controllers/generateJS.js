const makeFolder = require("../utils/makeFolder");
const makeFile = require("../utils/makeFile");
const bashCommand = require("../utils/executeBash");

function projectGenerator(projectName) {
  return makeFolder(projectName)
    .then((res) => {
      console.log("✅ Project Folder Created!");
      return makeFolder(`${projectName}/spec`);
    })
    .then((res) => {
      console.log("✅ Spec Folder Created!");
      return makeFolder(`${projectName}/__tests__`);
    })
    .then(() => {
      console.log("✅ Tests Folder Created!");
      return makeFile(`${projectName}/README.md`, `# ${projectName}`);
    })
    .then(() => {
      console.log("✅ README file created!");
      return makeFile(`${projectName}/.gitignore`, `node_modules`);
    })
    .then(() => {
      console.log("✅ gitignore file created");
      return makeFile(`${projectName}/index.js`);
    })
    .then(() => {
      console.log("✅ index.js file created");
      return makeFile(`${projectName}/__tests__/index.test.js`);
    })
    .then(() => {
      console.log("✅ index.test.js File Created");
      return bashCommand(`cd ${projectName}; git init`);
    })
    .then(() => {
      console.log("✅ Initialised Project As A Git Repo");
      return bashCommand(`cd ${projectName}; npm init -y`);
    })
    .then(() => {
      console.log("✅ Initialised Project With NPM");
    })
    .then(() => {
      console.log("--- Project Generated Successfully ---");
    })
    .catch((err) => {
      console.log("--- Project Generation Failed ❌ ---");
      console.log("ERROR: ", err);
    });
}

module.exports = projectGenerator;
