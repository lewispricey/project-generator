const fs = require("fs/promises");

const readFile = (path) => {
  return fs.readFile(path, "utf-8");
};

module.exports = readFile;
