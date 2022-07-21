// Packages needed for this application
const inquirer = require('inquirer');
const router = require('express').Router();
const connection = require('./config/connection');

// Rewrote to destructure prompts
// const inquirerPrompts = require('./util/inquirerPrompts');
const { initialPrompt,
    addDeptPrompt,
    addRolePrompt,
    addEmplPrompt,
    updateRolePrompt } = require('./util/inquirerPrompts');


// Get query
router.get('/', async (req,res) => {
    try {
        const getAllEmpl = 'SELECT * FROM employee;';
        const dbResponse = await connection.query(getAllEmpl);
        console.log(dbReponse);

    } catch (error) {
        console.log(error);
        res.json(error);
    }
});



// !!!! Write function saveToDB




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


module.exports = router;
