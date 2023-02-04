const helpCommand = () => {
  console.log(`
    New Project Generator v1

    This app will setup the basic file and folder structure for a new code project.


    ** Accepted Arguments **
    
    --help               Displays the list of supported commands

    -n=<project-name>   REQUIRED Sets the name of the new project
    
    -r=<remote-url>     (Optional) Sets a remote URL & pushes to the remote
    `);

  return { err: "help command" };
};

module.exports = helpCommand;
