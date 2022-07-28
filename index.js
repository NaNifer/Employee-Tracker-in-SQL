// Packages needed for this application
const inquirer = require("inquirer");
const cTable = require('console.table');

// Require title
const displayTitle = require('./util/EmployMgrASCI');

const {
  displayDept,
  displayBudget,
  displayEmpl,
  addDept,
  addRole,
  addEmpl,
  updateRole,
} = require("./util/inquirerFuncts");

// Initialize Inquirer
const init = async () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        name: "chooseTask",
        choices: [
          "View all departments",
          "View a Department Budget",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
          "EXIT",
        ],
      },
    ])
    .then((answers) => {
      if (answers.chooseTask === "View all departments") {
        displayDept();
      } else if (answers.chooseTask === "View a Department Budget") {
        displayBudget();
      } else if (answers.chooseTask === "View all employees") {
        displayEmpl();
      } else if (answers.chooseTask === "Add a department") {
        addDept(answers);
      } else if (answers.chooseTask === "Add a role") {
        addRole(answers);
      } else if (answers.chooseTask === "Add an employee") {
        addEmpl(answers);
      } else if (answers.chooseTask === "Update an employee role") {
        updateRole(answers);
      } if (answers.chooseTask === "EXIT") {
        process.exit();
      }
    });
}

// Function call to display title of app andinitialize app
displayTitle();
init();

// module.exports = init;


