// VIEW all Departments
const allDptQuery = `SELECT department.id AS ID, department.name AS Department
FROM department;`;

// VIEW all employees
const allEmplQuery = `SELECT employee.id AS ID, employee.first_name AS 'First Name', employee.last_name AS 'Last Name', role.title AS Title, department.name AS Department, role.salary AS Salary, CONCAT_WS(', ', mgr.last_name, mgr.first_name) AS Manager
FROM employee
INNER JOIN role ON employee.role_id = role.id 
LEFT JOIN employee AS mgr ON employee.manager_id = mgr.id 
INNER JOIN department ON role.department_id = department.id;`;

// VIEW all roles
const allRolesQuery = `SELECT role.id AS 'Role ID', role.title AS Title, department.name AS Department, CONCAT('$', role.salary) AS Salary
FROM role AS role
LEFT JOIN department AS department ON role.department_id = department.id;`;

const viewBudgetQuery = `SELECT department.name AS Department, CONCAT('$', SUM(role.salary)) AS Budget
FROM employee
INNER JOIN role ON employee.role_id = role.id
INNER JOIN department ON role.department_id = department.id
WHERE department.id = ?;`;

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
const changeRoleQuery = `UPDATE employee
SET role_id = ?
WHERE id = ?;`;


module.exports = {
  allDptQuery,
  allEmplQuery,
  allRolesQuery,
  addDptQuery,
  addRoleQuery,
  addEmplQuery,
  changeRoleQuery,
  viewBudgetQuery,
};
