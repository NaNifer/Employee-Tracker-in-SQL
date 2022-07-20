DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
    id INT AUTO_INCREMENT,
    department VARCHAR(50),
    role_id INT,
    employee_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id) REFERENCES role(id),
    FFOREIGN KEY (employee_id) REFERENCES employee(id)
);

CREATE TABLE role (
    id INT AUTO_INCREMENT,
    title VARCHAR(50),
    salary INT,
    department_id INT,
    employee_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id) REFERENCES department(id),
    FOREIGN KEY (employee_id) REFERENCES employee(id),
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id) REFERENCES role(id),
    FOREIGN KEY (manager_id) REFERENCES employee(id)
);