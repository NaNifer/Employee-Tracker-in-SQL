const connection = require("../config/connection");
const inquirer = require("inquirer");
const {dptList,
  roleList,
  mgrList,
  emplList} =  require('./dbPromptChoices');

// Import queries
const {
  allDptQuery,
  allEmplQuery,
  addDptQuery,
  addRoleQuery,
  addEmplQuery,
  changeRoleQuery,
} = require("../config/queries");

async function displayDept() {
  try {
    const departments = await connection.query(allDptQuery);
    console.log("\n\n\n\n\n\nALL DEPARTMENTS");
    console.table(departments[0]);
    // !!!!! I want to remove the index reference from the table (above).
  } catch (error) {
    console.log(error);
  }
}

async function displayEmpl() {
  try {
    const employees = await connection.query(allEmplQuery);
    console.log("\n\n\n\n\n\nALL EMPLOYEES");
    console.table(employees[0]);
  } catch (error) {
    console.log(error);
  }
}

async function addDept(answers) {
  try {
    await connection.query(addDptQuery, answers.deptName);
    console.log(`${answers.deptName} Department Added`);
  } catch (error) {
    console.log(error);
  }
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
      type: "input",
      message: "Which department does the role belong to?",
      name: "roleDepartment",
      choices: [ await dptList()
      ],
    },
  ];
  await inquirer.prompt(addRolePrompt).then((answers) => {
    try {
      connection.query(addRoleQuery, answers.roleName, answers.roleSalary, answers.roleDepartment);
      console.log(
        `${answers.roleName} salary ${answers.roleSalary} has been added to the ${answers.roleDepartment} department.`
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
      type: "input",
      message: "What is the employees role?",
      name: "emplRole",
      choices: await roleList(),
    },
    {
      type: "input",
      message: "Who is the employees manager?",
      name: "emplMgr",
      choices: await mgrList(),
    },
  ];
  await inquirer.prompt(addEmplPrompt).then((answers) => {
    try {
      // POST to DB
      console.log(
        `${answers.firstName} ${answers.lastName}, position ${answers.emplRole}, has been added on ${answers.emplMgr}'s team.`
      );
    } catch (error) {
      console.log(error);
    }
  });
}

async function updateRole(answers) {
  try {
    // POST to DB
    console.log("Role Updated");
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  displayDept,
  displayEmpl,
  addDept,
  addRole,
  addEmpl,
  updateRole,
};