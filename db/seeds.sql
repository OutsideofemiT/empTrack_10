INSERT INTO department (name) VALUES ('Sales'), ('Engineering'), ('Finance');

INSERT INTO role (title, salary, department_id) VALUES
('Sales Manager', 60000, 1),
('Engineer', 80000, 2),
('Financial Analyst', 70000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('John', 'Doe', 1, NULL),
('Jane', 'Smith', 2, 1),
('Bill', 'Johnson', 3, 3);
('Carmen', 'Wheeler', 1, 2);

