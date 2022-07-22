// An array of questions for user input

// Concatonates initialPrompt with addDeptPrompt
const addDeptPrompt = [
  {
    type: "input",
    message: "What is the name of the department?",
    name: "deptName",
  },
];

// Concatonate  with addRolePrompt
const addRolePrompt = [
  ({
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
    choices: [
      // Insert choices from database
    ],
  }),
];

// Concatonate  with addEmplPrompt
const addEmplPrompt = [
  ({
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
    choices: [
      // Insert ROLE choices from database
    ],
  },
  {
    type: "input",
    message: "Who is the employees manager?",
    choices: [
      // Insert FULL NAME choices from database
    ],
  }),
];

// Concatonate  with updateRolePrompt
const updateRolePrompt = [
  ({
    type: "input",
    message: "Which employee would you like to update?",
    choices: [
      // Insert FULL NAME choices from database
    ],
  },
  {
    type: "input",
    message: "Which role would you like to assign the employee?",
    choices: [
      // Insert ROLE choices from database
    ],
  }),
];

module.exports = {
  addDeptPrompt,
  addRolePrompt,
  addEmplPrompt,
  updateRolePrompt,
};
