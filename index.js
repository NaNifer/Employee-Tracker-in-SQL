// Packages needed for this application
const inquirer = require('inquirer');
const inquirerPrompts = require('./util/inquirerPrompts');

// !!!! Not sure if I need this !!!!!
const fs = require('fs');




// !!!! Write function saveToDB




// Function to initialize app
// !!!!!!  Need to create function "saveToDB" above !!!!!!!
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            saveToDB(answers.fileName, answers);
        })
        .catch(err => {
            console.log(err);
        })
};

// Function call to initialize app
init();
