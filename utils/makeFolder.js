const fs = require("fs/promises");

const makeFolder = (path) => {
  return fs.mkdir(path, { recursive: true });
};

module.exports = makeFolder;
