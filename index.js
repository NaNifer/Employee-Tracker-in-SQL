// Packages needed for this application
const inquirer = require("inquirer");
const connection = require("./config/connection");

// Import queries
const {
  getAllDpt,
  getAllEmployees,
  addDept,
  addRole,
  addEmpl,
  changeRole,
} = require("./config/queries");

// Import Prompts
// const inquirerPrompts = require('./util/inquirerPrompts');
const {
  addDeptPrompt,
  addRolePrompt,
  addEmplPrompt,
  updateRolePrompt,
} = require("./util/inquirerPrompts");

// !!!! NEED TO write function saveToDB
// Initialize Inquirer
async function init() {
  const initialPrompt = [
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
  ];

  const askQ = await inquirer.prompt(initialPrompt);

  if (askQ.chooseTask === "View all employees") {
    try {
      const employees = await connection.query(getAllEmployees);
      console.table("All Employees", employees[0]);
    } catch (error) {
      console.log(error);
    }
  } else if (askQ.chooseTask === "View all departments") {
    try {
      const departments = await connection.query(getAllDpt);
      console.log("\n\n\n\n\n\nALL DEPARTMENTS");
      console.table(departments[0]);
      // !!!!! I want to remove the index reference from the table (above).
    } catch (error) {
      console.log(error);
    }
  } else if (askQ.chooseTask === "Add a department") {
    // !!!! Add addDeptPrompt
    // !!!! Query to db for dept !!!!
    // !!!! Display query results !!!!
  } else if (askQ.chooseTask === "Add a role") {
    // !!!! Add addRolePrompt
    // !!!! Query to db for dept !!!!
    // !!!! Display query results !!!!
  } else if (askQ.chooseTask === "Add an employee") {
    // !!!! Add addEmplPrompt
    // !!!! Query to db for dept !!!!
    // !!!! Display query results !!!!
  } else if (askQ.chooseTask === "Update an employee role") {
    // !!!! Add updateRolePrompt
    // !!!! Query to db for dept !!!!
    // !!!! Display query results !!!!
  } else {
    return;
  }
}

// Function call to initialize app
init();
