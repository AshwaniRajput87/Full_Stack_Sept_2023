/***
 *    What is code splitting?
 *      -> It's a technique used in react to split your code into smaller chuncks, 
 *         that allows you to load the code that is necessary for a particular part of the application or pages.
 *      -> This will improve the intial loading time of the react app - overall you are improving the react performance.
 * 
 *      -> Please refere the notes over the notepad/ipad.
 * 
 * 
 *    What is HOC(Higher Order Component)?
 *      -> It's pretty similar like HOF(Higher Order Function).
 *      -> It's a design pattern where a function takes component and returns a new component with additional functionality.
 *      -> It's a way to reuse the component logic and share the code b/w components. 
 * 
 *      -> Custom hooks -> another way to reuse the logic and share the code b/w componnets.
 * 
 *    How to deploy the react project and make it live?
 * 
 *     -> we can use netilfy.
 *     -> login via you githun creds.(IF you don't have please create it)
 *     -> to make the react web app live, need to foolow these steps:
 * 
 *         1. npm run build -> to create the dist folder with all assests like html, css and JS
 *                             (Which will be in minified version(it is done automatixally via build command))
 * 
 *    What testing and how to write and use unit testing in react?
 * 
 *      -> Testing: A process of checking and verifying you work that works as oer the expectations or requirements.
 *      -> Unit testing: 
 *                       -> A tetsing done during development phase. It is done at dev (env) level by the developers.
 *                       -> To minisize or reduce the number of bugs before moving on the PROD environment.
 * 
 *     -> What do use to write the unit test cases in react?
 *         1. RTL(React Testing Library): Documentation link: https://testing-library.com/
 *         2. JEST: https://jestjs.io/docs/getting-started
 * 
 *         RTL: RTL builds on the top DOM testing library by adding API for working upon the react component. (For snapshot testing, you RTL).
 *         JEST: For component functionality, you use jest along with RTL.
 * 
 *         How to setup the jest and RTL in react projects?
 *         1. npm i -D jest jest-dom @testing-library/react
 *         2. add this test script in package.json
 *            "test": "jest src"
 *         3. You will get error by jest test runner tool to not compiled into the JS object so for that we need to set babel
 *            yarn add --dev babel-jest @babel/core @babel/preset-env @babel/preset-react
 *         4. create .babelrc file and metion configuration for preset-react, preset-env
 */