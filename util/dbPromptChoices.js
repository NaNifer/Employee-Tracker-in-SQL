const connection = require("../config/connection");


// Functions for choices for inquirer prompts
async function dptList() {
    const departmentQuery = `SELECT id AS value, name FROM department;`;
    const departments = await connection.query(departmentQuery);
    return departments[0];
}

async function roleList() {
    const rolesQuery = `SELECT id AS value, title AS name FROM role;`;
    const roles = await connection.query(rolesQuery);
    return roles[0];
 };

 async function mgrList() {
    const managerQuery = `SELECT id AS value, CONCAT(last_name, ', ', first_name) AS name FROM employee WHERE manager_id IS NULL;`;
    const managers = await connection.query(managerQuery);
    return managers[0];
 };

 async function emplList() {
    const employeeQuery = `SELECT id AS value, CONCAT(last_name, ', ', first_name) AS name FROM employee;`;
    const employee = await connection.query(employeeQuery);
    return employee[0];
 };

 module.exports = {
    dptList,
    roleList,
    mgrList,
    emplList
 };
 