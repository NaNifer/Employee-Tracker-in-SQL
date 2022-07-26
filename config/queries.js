// VIEW all Departments
const allDptQuery = `SELECT department.id AS ID, department.name AS Department
FROM department;`;

// VIEW all employees
const allEmplQuery = `SELECT employee.id AS ID, employee.first_name AS 'First Name', employee.last_name AS 'Last Name', role.title AS Title, department.name AS Department, role.salary AS Salary, CONCAT_WS(', ', mgr.last_name, mgr.first_name) AS Manager
FROM employee
INNER JOIN role ON employee.role_id = role.id 
LEFT JOIN employee AS mgr ON employee.manager_id = mgr.id 
INNER JOIN department ON role.department_id = department.id;`;

// ADD a department with 'deptName' from prompts
const addDptQuery = `INSERT INTO department(name)
VALUES (?);`;

// ADD a Role, incl Salary & DeptName
const addRoleQuery = `INSERT INTO role(title, salary, department_id)
VALUES (?, ?, ?);`;

// ADD an Employee, incl FirstName, LastName, Role, and Manager
const addEmplQuery = `INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES (?, ?, ?, ?);`;

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
