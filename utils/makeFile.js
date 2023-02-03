const fs = require("fs/promises");

const makeFile = (path, data = "") => {
  return fs.writeFile(path, data);
};

module.exports = makeFile;
