const error = require("../controllers/error");
const helpCommand = require("../controllers/help");

const checkArgs = (args) => {
  if (!args[0]) return error();
  if (/^--help/.test(args[0])) return helpCommand();

  const urlRegex = /^-r=/;
  const projectNameRegex = /^-n=/;
  const arguments = {};

  args.forEach((arg) => {
    if (projectNameRegex.test(arg)) arguments.projectName = arg.split("=")[1];
    if (urlRegex.test(arg)) arguments.remoteURL = arg.split("=")[1];
  });

  return arguments;
};

module.exports = checkArgs;
