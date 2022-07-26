// Packages needed for this application
const inquirer = require("inquirer");

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
async function init() {
  displayTitle();
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
      {
        type: "input",
        message: "What is the name of the department?",
        name: "deptName",
        when(answers) {
          return answers.chooseTask === "Add a department";
        },
      },
      {
        type: "input",
        message: "Which employee would you like to update?",
        choices: await emplList(),
        when(answers) {
          return answers.chooseTask === "Update an employee role";
        },
      },
      {
        type: "input",
        message: "Which role would you like to assign the employee?",
        choices: await roleList(),
        when(answers) {
          return answers.chooseTask === "Update an employee role";
        },
      },
    ])
    .then((answers) => {
      if (answers.chooseTask === "View all departments") {
        displayDept();
        dptList();
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
      }
    });
}

// Function call to initialize app
init();


