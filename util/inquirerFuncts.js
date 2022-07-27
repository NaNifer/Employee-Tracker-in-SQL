const connection = require("../config/connection");
const inquirer = require("inquirer");
const {dptList,
  roleList,
  mgrList,
  emplList} =  require('./dbPromptChoices');
const { init } = require('../index');

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
  init();
}

async function displayEmpl() {
  try {
    const employees = await connection.query(allEmplQuery);
    console.log("\n\n\n\n\n\nALL EMPLOYEES");
    console.table(employees[0]);
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
  try {
    connection.query(addDptQuery, answers.deptName);
    console.log(`${answers.deptName} Department Added`);
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
      choices: dptList()
      ,
    },
  ];
  await inquirer.prompt(addRolePrompt).then((answers) => {
    try {
      connection.query(addRoleQuery, [answers.roleName, answers.roleSalary, answers.roleDepartment]);
      console.log(
        `${answers.roleName} salary ${answers.roleSalary} has been added to the ${answers.roleDepartment} department.`
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
    try {
      connection.query(addEmplQuery, [answers.firstName, answers.lastName, answers.emplRole, answers.emplMgr]);
      console.log(
        `${answers.firstName} ${answers.lastName}, position ${answers.emplRole}, has been added on ${answers.emplMgr}'s team.`
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
  console.log(answers, "line 134 inquirerPrompts");
  try {
    connection.query(changeRoleQuery, [answers.emplName, answers.emplNewRole]);
    console.log(`${answers.emplName} Role Updated ${toanswers.emplNewRole}`);
  } catch (error) {
    console.log(error);
  }
});
init();
}


module.exports = {
  displayDept,
  displayEmpl,
  addDept,
  addRole,
  addEmpl,
  updateRole,
};
