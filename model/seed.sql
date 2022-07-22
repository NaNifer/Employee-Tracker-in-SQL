USE employees_db;

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