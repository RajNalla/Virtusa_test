# Virtusa_Test

## Overview
This application has an API which parses and return content.  The application is a backend [Node.js](https:/nodejs.org/en/) application written in [TypeScript](https://www.typescriptlang.org/).

## Architecture

## Development
The Node version is 12.x and the TypeScript code is transpiled to es2017 to take advantage of [zero-cost async stack traces](https://docs.google.com/document/d/13Sy_kBIJGP0XT34V1CV3nkWya4TwYx9L3Yv45LdGB6Q/edit).  This helps improve debugging by showing async function calls in the stacktrace, whereas before, async calls showed up as anonymous.

The project folder structure utilizes modules.
 
Services - This folder is responsible for all the major operations.utils- This folder is responsible for all the project level utilities.

## Local Setup
This application requires [Node.js](https://nodejs.org/en/) version 12.x+ and [TypeScript](https://www.typescriptlang.org/) to run locally. Clone this repo and run the following:
`npm install`


### To run the app
After installing the application, do either of the following:

#### Using the command line
`npm run start` to invoke application

#### Invoking the API
The application is designed to have an Express API that hosts admin routes for triggering crawl runs outside of the scheduled times.  The following routes are available:

| Endpoint                                             | Description| ---------------------------------------------------- | -----------------------------------------------------------------------| **GET /healthcheck**                                 | healthcheck endpoint; displays 'Health is good'| **GET /admin/localhost:8080/api/v1/parse                   | parsing of the data will return a different value
localhost:8080/api/v2/parse                   | parsing of the data will return a different value


## Testing
This project uses mocha and chai for unit testing and instanbul for code coverage.  To learn more about these packages, please visit <https://mochajs.org/> and <https://www.chaijs.com/>.  More information about instanbul can be found at <https://istanbul.js.org/>.
To run tests:
`npm run test`
with coverage:
`npm run test`