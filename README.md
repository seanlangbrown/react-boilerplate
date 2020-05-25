# custom-react-boilerplate

React 16.5.2 + babel 7 + webpack 4 + eslint + jest + flow + Redux + Redux-Thunk + Semantic-Release

- [Installation](#inst)
- [Features](#features)
- [Project Structure](#struct)
- [Usage](#use)
- [Continuous Integration Setup](#CISetup)

<a name="features"></a>
## Features: ##

- Transpile & Bundle:
  - [babel 7](https://babeljs.io/)
  - [webpack](https://webpack.js.org/)
- Lint
  - [ESLint](https://eslint.org/)
- Front-End Frameworks:
  - [flow](https://flow.org/)
  - [react](https://reactjs.org/)
  - [redux](https://redux.js.org/)
  - [redux-thunk](https://github.com/reduxjs/redux-thunk)
- Test:
  - [jest](https://jestjs.io/)
- Build and Release:
  - [commitizen](http://commitizen.github.io/cz-cli)
  - [semantic-release](https://github.com/semantic-release/semantic-release)

<a name="inst"></a>
## Installation: ##

```bash
$ git clone git://github.com/seanlangbrown/react-boilerplate.git <your-project-name>
```
Remove the .git directory 
```bash
$ rm -rf <your-project-name>/.git
```
Edit package.json and change the name of the project and author // TODO: replace with setup script? (the custom part)

Now, create a new github project and do:
  
```bash
$ git init
$ git remote add origin https://github.com/your-name/<your-project-name>.git
$ git cm -a -m"set up repository with git://github.com/seanlangbrown/react-boilerplate.git"
$ git push origin master
```

<a name="use"></a>
### Usage: ###

When using with **yarn** then use the following syntax:

```bash
$ yarn name params
```

Or with just **npm**:

```bash
$ npm name params
```

- **start** - Run the code in development mode.
- **build** - Build the production mode.
- **lint** - Lint :cop: using [ESLint](https://eslint.org/).
- **flow** - [Flow](https://flow.org/) checks.
- //TODO commit / release / test

<a name="struct"></a>
### Project Structure: ###

- react-boilerplate/src/ - All the sources should be here.
- react-boilerplate/src/types/ - All the flow type declarations.
- react-boilerplate/src/components/containers/ - All the React containers.
- react-boilerplate/src/components/presentational/ - All the React presentational components without a state.
- react-boilerplate/src/store/ - The redux store.
- react-boilerplate/__tests__/ - All the unit tests.
- webpack.config.js - The configuration for [webpack](https://webpack.js.org/).
- .editorconfig - The [coding style settings](editorconfig.org) for this project.

<a name="CISetup"></a>
### Continuoue Integration Setup: ###

This project is using [semantic-release](https://github.com/semantic-release/semantic-release) to automatic handling of the version of your web app. To be able to automatic release a new version you must configure Travis-CI to your new project:

- Go to [https://travis-ci.org/](https://travis-ci.org/) and either signup or signin.
- Select your new project and click setting.
- You MUST configure a token or [semantic-release](https://github.com/semantic-release/semantic-release) will not be able to commit changes:
  - Create a new token (see [here](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) how to do it).
  - Permissions needed in the github token:
    - repo:
      - repo:status
      - repo_deployment
      - public_repo
    - admin:org:
      - read:org
    - admin:repo_hook:
      - write:repo_hook
    - user:
      - user:email
  - In your Travis-CI project setting, go to the environment settings section and add a new environment variable with the name 'GH_TOKEN' and the generated token as the data.
- To test everything just push something into github and it should update everything automatic!
