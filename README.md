# Parking Lot

Search through lists of cars.

## New Features

* using styled-components for CSS in JS
  * add `vscode-styled-components` in VS Code to get syntax highlighting
  * https://alligator.io/react/styled-components/
  * https://www.styled-components.com/docs/basics#getting-started
* using react-helmet to manage page-level stuff (in the head element) within App.jsx instead of importing at index.html
  * https://github.com/nfl/react-helmet
* using `.jsx` instead of `.js`, which is a very minor change but makes things more explicit (had to change only the test property in webpack for it to work, plus imports require the explicit `.jsx` if from a file, which kind of like)
* when possible, use the ES6 feature of implicitly importing index.js from any folder that is itself imported. In other words, `import App from 'components/App'` is equivalent to `import App from 'components/App/index.js'`
  * https://alligator.io/react/index-js-public-interfaces/

## Directory Structure

* /components
  * /app - Contains the header, footer, and react-router views
    * App.jsx
    * Footer.jsx
    * Header.jsx
  * /containers
    * CarDetail.js
    * CarForm.js
    * CarListAll.js
    * CarListLot.js
    * CarSearchAll.js
    * CarSearchLot.js
  * /lib - Useful components that will get used on multiple pages
    * Pager.jsx
  * /pages - Separate areas of the site, with subcomponents contained within
    * About.jsx
    * /Cars
      * CarCard.jsx
      * CarDetail.jsx
      * CarForm.jsx
      * CarList.jsx
      * CarSearch.jsx
    * Home.jsx
* /routes - constants for routing
  * index.js
* /services - API call functions
* /state - where all state management happens
  * /actions
    * cars.js
  * /reducers
    * cars.js
    * index.js
  * /selectors
    * cars.js
  * store.js
* /testing - the directory where all tests go
  * /fixtures
  * /mocks
    * fileMock.js
  * /setup
    * setupTests.js
* index.html
* index.js
