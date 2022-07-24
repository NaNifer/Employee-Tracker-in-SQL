// EXAMPLE for concat in queries:
// SELECT
//     CONCAT_WS(', ', lastName, firstname)
// FROM
//     employees;

// VIEW all Departments
const allDptQuery = `SELECT department.id AS ID, department.name AS Department
FROM department;`;

// VIEW all employees
const allEmplQuery = `SELECT empl.id AS ID, empl.first_name AS 'First Name', empl.last_name AS 'Last Name', role.title AS Title, dpt.name AS Department
FROM employee AS empl
INNER JOIN role ON empl.role_id = role.id 
LEFT JOIN employee AS mgr ON empl.manager_id = mgr.id 
INNER JOIN department AS dpt;`;

// ADD a department with 'deptName' from prompts
const addDptQuery = `INSERT INTO department(name)
VALUES (?);`;

// ADD a Role, incl Salary & DeptName
const addRoleQuery = `
;`;

// ADD an Employee, incl FirstName, LastName, Role, and Manager
const addEmplQuery = `
;`;

// MODIFY an Employee's Role
const changeRoleQuery = `
;`;

module.exports = {
  allDptQuery,
  allEmplQuery,
  addDptQuery,
  addRoleQuery,
  addEmplQuery,
  changeRoleQuery,
};
