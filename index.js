// Packages needed for this application
const inquirer = require("inquirer");
const cTable = require('console.table');

// Require title
const displayTitle = require('./util/EmployMgrASCI');

const { init } = require('./util/inquirerFuncts');

// Function call to display title of app andinitialize app
displayTitle();
init();



