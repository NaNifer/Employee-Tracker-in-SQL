// VIEW all Departments
const getAllDpt = `SELECT department.id AS ID, department.name AS Department
FROM department;`;

// VIEW all employees
const getAllEmployees = `SELECT employee.id AS ID, employee.first_name AS 'First Name', employee.last_name AS 'Last Name', role.title AS Title, department.name AS Department
FROM employee 
INNER JOIN role ON employee.role_id = role.id 
LEFT JOIN employee ON employee.manager_id = manager_id 
INNER JOIN department AS Department;`;

// ADD a department with 'deptName' from prompts
const addDept = `INSERT INTO department(name)
VALUES (?);`;

// ADD a Role, incl Salary & DeptName
const addRole = `
;`;

// ADD an Employee, incl FirstName, LastName, Role, and Manager
const addEmpl = `
;`;

// MODIFY an Employee's Role
const changeRole = `
;`;

module.exports = {
  getAllDpt,
  getAllEmployees,
  addDept,
  addRole,
  addEmpl,
  changeRole,
};
