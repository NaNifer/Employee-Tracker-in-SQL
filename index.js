// Packages needed for this application
const inquirer = require("inquirer");

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
      // {
      //   type: "input",
      //   message: "What is the name of the role?",
      //   name: "roleName",
      //   when(answers) {
      //     answers.chooseTask === "Add a role";
      //   },
      // },
      // {
      //   type: "input",
      //   message: "What is the salary of the role?",
      //   name: "roleSalary",
      //   when(answers) {
      //     answers.chooseTask === "Add a role";
      //   },
      // },
      // {
      //   type: "input",
      //   message: "Which department does the role belong to?",
      //   name: "roleDepartment",
      //   choices: [
      //     // Insert choices from database
      //   ],
      //   when(answers) {
      //     return answers.chooseTask === "Add Role";
      //   },
      // },

      {
        type: "input",
        message: "Which employee would you like to update?",
        choices: [
          // Insert FULL NAME choices from database
        ],
        when(answers) {
          return answers.chooseTask === "Update an employee role";
        },
      },
      {
        type: "input",
        message: "Which role would you like to assign the employee?",
        choices: [
          // Insert ROLE choices from database
        ],
        when(answers) {
          return answers.chooseTask === "Update an employee role";
        },
      },
    ])
    .then((answers) => {
      console.log(answers.chooseTask, "line 124 index");
      console.log(answers, "Line 125 index");
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
      }
    });
}

// Function call to initialize app
init();
