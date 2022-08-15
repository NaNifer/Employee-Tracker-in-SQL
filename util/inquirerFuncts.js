const connection = require("../config/connection");
const inquirer = require("inquirer");
const cTable = require('console.table');

// Import promptChoices from db
const {dptList,
  roleList,
  mgrList,
  emplList} =  require('./dbPromptChoices');

// Import queries
const {
  allDptQuery,
  allEmplQuery,
  allRolesQuery,
  addDptQuery,
  addRoleQuery,
  addEmplQuery,
  changeRoleQuery,
  viewBudgetQuery
} = require("../config/queries");

// Uppercases user input
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};


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
          "View all roles",
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
      } else if (answers.chooseTask === "View all roles") {
        displayRoles();
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

async function displayDept() {
  try {
    const departments = await connection.query(allDptQuery);
    console.table(departments[0]);
  } catch (error) {
    console.log(error);
  }
  init();
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
    const budgets = await connection.query(viewBudgetQuery, answers.deptName);
    console.table(budgets[0]);
  } catch (error) {
    console.log(error);
  }
  init();
}

async function displayEmpl() {
  try {
    const employees = await connection.query(allEmplQuery);
    console.table(employees[0]);
  } catch (error) {
    console.log(error);
  }
  init();
}

async function displayRoles() {
  try {
    const roles = await connection.query(allRolesQuery);
    console.table(roles[0]);
  } catch (error) {
    console.log(error);
  }
  init();
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
    dptNameCap = capitalizeFirstLetter(answers.deptName);
  try {
    connection.query(addDptQuery, dptNameCap);
    console.log(`${dptNameCap} Department Added`);
  } catch (error) {
    console.log(error);
  }
});
init();
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
    roleNameCap = capitalizeFirstLetter(answers.roleName);
    try {
      connection.query(addRoleQuery, [roleNameCap, answers.roleSalary, answers.roleDepartment]);
      console.log(
        `${roleNameCap} salary ${answers.roleSalary} has been added.`
      );
    } catch (error) {
      console.log(error);
    }
  });
  init();
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
    firstNameCap = capitalizeFirstLetter(answers.firstName);
    lastNameCap = capitalizeFirstLetter(answers.lastName);
    try {
      connection.query(addEmplQuery, [firstNameCap, lastNameCap, answers.emplRole, answers.emplMgr]);
      console.log(
        `${firstNameCap} ${lastNameCap} has been added.`
      );
    } catch (error) {
      console.log(error);
    }
  });
  init();
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
  try {
    connection.query(changeRoleQuery, [answers.emplName, answers.emplNewRole]);
    console.log("Role Updated");
  } catch (error) {
    console.log(error);
  }
});
init();
}


module.exports = {
  init
};
