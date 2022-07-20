// An array of questions for user input
const initialPrompt = [
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'chooseTask',
        choices: [
            'View all departments', 
            'View all employees', 
            'Add a department', 
            'Add a role', 
            'Add an employee',
            'Update an employee role'],
    },
];


const addDeptPrompt = initialPrompt.concat([
    {
        type: 'input',
        message: 'Whst is the name of the department?',
        name: 'deptName'
    }
]);


const addRolePrompt = initialPrompt.concat([
    {
        type: 'input',
        message: 'What is the name of the role?',
        name: 'roleName',
    },
    {
        type: 'input',
        message: 'What is the salary of the role?',
        name: 'roleSalary',
    },
    {
        type: 'input',
        message: 'Which department does the role belong to?',
        name: 'roleDepartment',
        choices: [
            // Insert choices from database
        ]
    }
]);


const addEmplPrompt = initialPrompt.concat([
    {
        type: 'input',
        message: 'What is the employees first name?',
        name: 'firstName',
    },
    {
        type: 'input',
        message: 'What is the employees last name?',
        name: 'lastName',
    },
    {
        type: 'input',
        message: 'What is the employees role?',
        choices: [
            // Insert ROLE choices from database
        ],
    },
    {
        type: 'input',
        message: 'Who is the employees manager?',
        choices: [
            // Insert FULL NAME choices from database
        ]
    }
]);


const updateRolePrompt = initialPrompt.concat([
    {
        type: 'input',
        message: 'Which employee would you like to update?',
        choices: [
            // Insert FULL NAME choices from database
        ],
    },
    {
        type: 'input',
        message: 'Which role would you like to assign the employee?',
        choices: [
            // Insert ROLE choices from database
        ]
    }
]);

module.exports = inquirerPrompts;
