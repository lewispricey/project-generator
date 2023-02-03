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

### Project Extras

- Add ability to make a global installer so the generator can be run from anywhere on the file system
  // eg. generate [project name][github http]
- Add the ability to setup a python project based on the arguments
