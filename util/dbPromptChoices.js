const connection = require("../config/connection");


// Functions for choices for inquirer prompts

async function dptList() {
    const departmentQuery = `SELECT id AS value, name FROM department;`;
    const departments = await connection.query(departmentQuery);
    console.log(departments, "departments from query line 8 dbPromptChoices");
    console.log(departments[0]);
    return departments[0];
}

async function roleList() {
    const rolesQuery = `SELECT id AS value, title AS name FROM role;`;
    const roles = await connection.query(rolesQuery);
    console.log(roles);

    return roles[0];
 };

 async function mgrList() {
    const managerQuery = `SELECT id, CONCAT(first_name, ', ', last_name) AS mgr FROM employee WHERE manager_id IS NULL;`;
    const managers = await connection.query(managerQuery);
    console.log(managers);

    return managers[0];
 };

 async function emplList() {
    const employeeQuery = `SELECT id, CONCAT(first_name, ', ', last_name) AS name FROM employee;`;
    const employee = await connection.query(employeeQuery);
    console.log(employee);

    return employee[0];
 };

 module.exports = {
    dptList,
    roleList,
    mgrList,
    emplList
 };
 