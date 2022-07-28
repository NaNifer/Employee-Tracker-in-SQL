const connection = require("../config/connection");
const inquirer = require("inquirer");
const {dptList,
  roleList,
  mgrList,
  emplList} =  require('./dbPromptChoices');
const cTable = require('console.table');

// const { init } = require('/Users/nifer/Documents/bootcamp/homework/Employee-Tracker-in-SQL-h12/index.js');

// Import queries
const {
  allDptQuery,
  allEmplQuery,
  addDptQuery,
  addRoleQuery,
  addEmplQuery,
  changeRoleQuery,
  viewBudgetQuery
} = require("../config/queries");

async function displayDept() {
  try {
    const departments = await connection.query(allDptQuery);
    console.table(departments[0]);
  } catch (error) {
    console.log(error);
  }
  // init();
}

async function displayBudget() {
  const viewBudgetPrompt = [
    {
    type: "list",
    message: "Which department do you want to view?",
    name: "deptName",
    choices: await dptList(),
  }];
  const answers = await inquirer.prompt(viewBudgetPrompt)
  try {
    const departments = await connection.query(viewBudgetQuery);
    console.table(departments[0]);
  } catch (error) {
    console.log(error);
  }
}

async function displayEmpl() {
  try {
    const employees = await connection.query(allEmplQuery);
    console.table(employees[0]);
  } catch (error) {
    console.log(error);
  }
}

async function addDept(answers) {
  const addDeptPrompt = [
    {
      type: "input",
      message: "What is the name of the department?",
      name: "deptName",
    },
  ];
  await inquirer.prompt(addDeptPrompt).then((answers) => {
  try {
    connection.query(addDptQuery, answers.deptName);
    console.log(`${answers.deptName} Department Added`);
  } catch (error) {
    console.log(error);
  }
});
}

async function addRole(answers) {
  const addRolePrompt = [
    {
      type: "input",
      message: "What is the name of the role?",
      name: "roleName",
    },
    {
      type: "input",
      message: "What is the salary of the role?",
      name: "roleSalary",
    },
    {
      type: "list",
      message: "Which department does the role belong to?",
      name: "roleDepartment",
      choices: await dptList()
      ,
    },
  ];
  await inquirer.prompt(addRolePrompt).then((answers) => {
    try {
      connection.query(addRoleQuery, [answers.roleName, answers.roleSalary, answers.roleDepartment]);
      console.log(
        `${answers.roleName} salary ${answers.roleSalary} has been added.`
      );
    } catch (error) {
      console.log(error);
    }
  });
}

async function addEmpl(answers) {
  const addEmplPrompt = [
    {
      type: "input",
      message: "What is the employees first name?",
      name: "firstName",
    },
    {
      type: "input",
      message: "What is the employees last name?",
      name: "lastName",
    },
    {
      type: "list",
      message: "What is the employees role?",
      name: "emplRole",
      choices: await roleList(),
    },
    {
      type: "list",
      message: "Who is the employees manager?",
      name: "emplMgr",
      choices: await mgrList(),
    },
  ];
  await inquirer.prompt(addEmplPrompt).then((answers) => {
    try {
      connection.query(addEmplQuery, [answers.firstName, answers.lastName, answers.emplRole, answers.emplMgr]);
      console.log(
        `${answers.firstName} ${answers.lastName} has been added.`
      );
    } catch (error) {
      console.log(error);
    }
  });
}

async function updateRole(answers) {
  const updateRolePrompt = [  
    {
    type: "list",
    message: "Which employee would you like to update?",
    name: "emplName",
    choices: await emplList(),
   
  },
  {
    type: "list",
    message: "Which role would you like to assign the employee?",
    name: "emplNewRole",
    choices: await roleList(),
    },
  ];
  await inquirer.prompt(updateRolePrompt).then((answers) => {
  console.log(answers, "line 145 inquirerPrompts");
  try {
    connection.query(changeRoleQuery, [answers.emplName, answers.emplNewRole]);
    console.log("Role Updated");
  } catch (error) {
    console.log(error);
  }
});
}


module.exports = {
  displayDept,
  displayBudget,
  displayEmpl,
  addDept,
  addRole,
  addEmpl,
  updateRole,
};
