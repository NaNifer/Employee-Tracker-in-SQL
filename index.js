// Packages needed for this application
const inquirer = require("inquirer");
const cTable = require('console.table');

// List of choices for inquirer prompts imported
const { dptList,
roleList,
mgrList,
emplList
} = require('./util/dbPromptChoices');

// Require title
const displayTitle = require('./util/EmployMgrASCI');

const {
  displayDept,
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
      } if (answers.chooseTask !== "EXIT") {
        init();}
    });
}

// Function call to display title of app andinitialize app
displayTitle();
init();


