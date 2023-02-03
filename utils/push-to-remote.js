const bashCommand = require("./execute-bash");

const setupRemote = (projectName, githubURL) => {
  return bashCommand(`cd ${projectName}; git remote add origin ${githubURL}`);
};

const initialCommit = (projectName) => {
  return bashCommand(
    `cd ${projectName}; git add .; git commit -m "initial project setup"`
  );
};

const pushCommit = (projectName) => {
  return bashCommand(`cd ${projectName}; git push -u origin main`);
};

const pushToRemote = (projectName, githubURL) => {
  console.log("🔨 Setting remote...");
  return setupRemote(projectName, githubURL)
    .then(() => {
      console.log("✅ Remote set \n");
      console.log("🔨 Committing Files...");
      return initialCommit(projectName);
    })
    .then(() => {
      console.log("✅ Initial commit created \n");
      console.log("🔨 Pushing commit to the remote repo...");
      return pushCommit(projectName);
    })
    .then(() => {
      console.log("✅ Pushed commit to remote \n");
    });
};

module.exports = pushToRemote;
