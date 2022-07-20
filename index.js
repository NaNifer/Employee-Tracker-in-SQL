// Packages needed for this application
const inquirer = require('inquirer');

// !!!! Not sure if I need this !!!!!
const fs = require('fs');




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
