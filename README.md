# Project Generator

A command line application to setup a new project.

## JS Generator

- Creates the project directory .
- Adds a README.md with the title pre-set as the project name.
- Initialises the project directory with NPM.
- Initialises the project directory with Git.
- Adds a gitignore file for node_modules.
- Adds an empty index.js file.
- Sets up a folder for tests and with an empty index.test.js file setup.
- Installs Jest
- Adds Jest to the test script in the package.json
- Takes a GitHub URL and sets the remote as this repo (eg. git remote add origin <URL>)
- Performs an inital commit after file setup
- Pushes initial commit to GitHub (eg. git push -u origin main)

### Accepted Arguements

--help Displays the list of supported commands

-n=<project-name> REQUIRED Sets the name of the new project

-r=<remote-url> (Optional) Sets a remote URL & pushes to the remote

#### Project Extras For The Future

- Add the ability to setup a python project based on CL args.
- Add the ability to setup a new typescript project based on CL args.
