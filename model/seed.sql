USE employees_db;

INSERT INTO department(department)
VALUES ('Customer Service'),
    ('HR'),
    ('Sales'),
    ('Marketing'),
    ('Operations');

INSERT INTO role(title, salary, department_id)
VALUES ('Complaint Listener', 30000, 1),
    ('Head Cat Wrangler', 150000, 1),
    ('Accountant', 100000, 5),
    ('Lead Sale Rep', 200000, 3),
    ('Expeditor', 50000, 1),
    ('HR Assistant', 30000, 2),
    ('Content Web Manager', 70000, 4),
    ('Executive Assistant', 200000, 5),
    ('COO', 250000, null);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ('Red', 'McDonnel', 1, 2),
    ('Anastasia', 'LeGoth', 2, null),
    ('Muffy', 'Smithsonian', 3, null),
    ('Chad', 'Oberlin', 4, 9),
    ('Rhonda', 'Jones', 5, 2),
    ('Hunter', 'Algiers', 6, 7),
    ('Nathan', 'Jung', 7, 9),
    ('Luella', 'Mason', 8, 9),
    ('Lilou', 'Lighthouse', 9, null);