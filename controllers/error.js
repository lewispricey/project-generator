const error = () => {
  console.error(`
    🚨 Invalid Command 🚨
  
    Please include your new project name as an argument... For more information on valid arguments please use --help
    `);
  return { err: "missing args" };
};

module.exports = error;
