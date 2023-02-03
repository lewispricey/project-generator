const { exec } = require("child_process");

const bashCommand = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

module.exports = bashCommand;
