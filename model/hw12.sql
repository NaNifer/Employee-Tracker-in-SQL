DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
    id INT AUTO_INCREMENT,
    name VARCHAR(50),
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT AUTO_INCREMENT,
    title VARCHAR(50),
    salary INT,
    department_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE SET NULL
);


CREATE TABLE employee (
    id INT AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE SET NULL,
    FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
);


INSERT INTO department(name)
VALUES ('Customer Service'),
    ('HR'),
    ('Sales'),
    ('Marketing'),
    ('Operations');

INSERT INTO role(title, salary, department_id)
VALUES ('Complaint Listener', 30000, 1),
    ('Head Cat Wrangler', 150000, 1),
    ('COO', 250000, null),
    ('Accountant', 100000, 5),
    ('Lead Sale Rep', 200000, 3),
    ('Expeditor', 50000, 1),
    ('HR Assistant', 30000, 2),
    ('Content Web Manager', 70000, 4),
    ('Executive Assistant', 200000, 5);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ('Red', 'McDonnel', 1, null),
    ('Anastasia', 'LeGoth', 2, null),
    ('Lilou', 'Lighthouse', 3, null),
    ('Muffy', 'Smithsonian', 4, 1),
    ('Chad', 'Oberlin', 5, 2),
    ('Rhonda', 'Jones', 6, 2),
    ('Hunter', 'Algiers', 7, 1),
    ('Nathan', 'Jung', 8, 3),
    ('Luella', 'Mason', 9, 3);
    
SELECT department.id AS ID, department.name AS Department
FROM department;

    
SELECT employee.id AS ID, employee.first_name AS 'First Name', employee.last_name AS 'Last Name', role.title AS Title, department.name AS Department, role.salary AS Salary, CONCAT_WS(', ', mgr.last_name, mgr.first_name) AS Manager
FROM employee
INNER JOIN role ON employee.role_id = role.id 
LEFT JOIN employee AS mgr ON employee.manager_id = mgr.id 
INNER JOIN department ON role.department_id = department.id;

-- SELECT e.id AS 'ID', e.first_name AS 'First Name', e.last_name AS 'Last Name', r.title AS Title, d.name AS Department, r.salary AS Salary, CONCAT(m.first_name, ', ', m.last_name) AS Manager
-- FROM employee AS e
-- INNER JOIN role AS r ON e.role_id = r.id
-- LEFT JOIN employee AS m ON e.manager_id = m.id
-- INNER JOIN department AS d ON  r.department_id = d.id;



-- INSERT INTO department(name)
-- VALUES (?);