// Packages needed for this application
const inquirer = require('inquirer');

// !!!! Not sure if I need this !!!!!
const fs = require('fs');



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
        default: ['Move up and down to reveal more choices.']

    },

    
    {
        type: 'input',
        message: 'How do you want to handle tests?',
        name: 'tests',
        default: 'No tests available.'
    },
    {
        type: 'input',
        message: 'How can someone contribute to this project?',
        name: 'contributions',
        default: 'Submit a pull request and reach out through email.'
    },
    {
        type: 'input',
        message: 'Briefly describe your process for this project.',
        name: 'myProcess',
        default: 'I did coding.'
    },
    {
        type: 'input',
        message: 'Describe some of the challenges you faced, and what did you learn during this project?',
        name: 'whatIlearned',
        default: 'I learned things.'
    },
    {
        type: 'input',
        message: 'Describe some of the features you plan to implement in the future.',
        name: 'continuedDevel',
        default: 'I have big plans!'
    },
    {
        type: 'input',
        message: 'What email address can users contact you at?',
        name: 'email',
        default: 'awesomeperson@totallyrad.com'
    },
    {
        type: 'input',
        message: 'What is your github user name?',
        name: 'github',
        default: 'NaNifer'
    },
];



// EXAMPLE CODE: Function to write README file
// function saveToDB(fileName, data) {
//     fs.writeFile(`README.md`, generateMarkdown(data), err => {
//         if (err) {
//             console.log(err, "writeToFile");
//             return;
//         }
//         else {
//             console.log("yay!");
//         }
//     }
//     )
// };




// Function to initialize app
// !!!!!!  Need to create function "saveToDB" above !!!!!!!
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            saveToDB(answers.fileName, answers);
        })
        .catch(err => {
            console.log(err);
        })
};

// Function call to initialize app
init();
