// Packages needed for this application
const inquirer = require('inquirer');
const connection = require('./config/connection');

// Import queries
const {
    getAllDpt,
    getAllEmployees,
    addDept,
    addRole,
    addEmpl,
    changeRole } = require('./config/queries');

// Import Prompts
// const inquirerPrompts = require('./util/inquirerPrompts');
const { initialPrompt,
    addDeptPrompt,
    addRolePrompt,
    addEmplPrompt,
    updateRolePrompt } = require('./util/inquirerPrompts');



// // EXAMPLE Function to initialize app
// function init async () {
//     inquirer
//         .prompt(questions)
//         .then(answers => {
//             saveToDB(answers.fileName, answers);
//         })
//         .catch(err => {
//             console.log(err);
//         })
// };


// !!! Nolan suggested console.table for displaying queries


// !!!! NEED TO write function saveToDB
// Initialize Inquirer
function init async () => {
    inquirer
        .prompt(initialPrompt)
        .then(val => {
            if (val.option === "View all departments") {
                inquirer
                .prompt(addDeptPrompt)
                .then()
                // !!!! Query to db for dept !!!!
                // !!!! Display query results !!!!
            } else if (val.option === "View all employees") {
                // !!!! Query to db for dept !!!!
                // !!!! Display query results !!!!
            } else if (val.option === "Add a department") {
                // !!!! Query to db for dept !!!!
                // !!!! Display query results !!!!
            } else if (val.option === "Add a role") {
                // !!!! Query to db for dept !!!!
                // !!!! Display query results !!!!
            } else if (val.option === "Add an employee") {
                // !!!! Query to db for dept !!!!
                // !!!! Display query results !!!!
            } else if (val.option === "Update an employee role") {
                // !!!! Query to db for dept !!!!
                // !!!! Display query results !!!!
            }
            else {
                return;
            }
        });
};



// Function call to initialize app
init();


module.exports = router;
