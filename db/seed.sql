-- Insert department info
INSERT INTO department (name)
VALUE ('Sales'), 
('Development'),
('Finance'),
('Legal');

-- Insert role info

INSERT INTO role(title, salary, department_id)
VALUE('Sales Associate', 40000, 1),
('Sales Lead', 60000, 1), 
('Entry Software Engineer', 80000, 2),
('Mid Software Engineer', 120000, 2),
('Lead Software Engineer', 180000, 2),
('Financial Administrator', 60000, 3),
('Accountant', 100000, 3),
('Finance Manager', 130000, 3),
('Chief Legal Officer', 250000, 4),
('Legal Assistant', 60000, 4),
('Contracts Administrator', 90000, 4);

-- Insert employee info

INSERT INTO employee(id, first_name, last_name, role_id, manager_id)
VALUE (1, 'Jim', 'Halpert', 1, 2),
(2, 'Michael', 'Scott', 2, NULL),
(3, 'Dwigtht', 'Schrute', 3, 5),
(4, 'Ryan', 'Howard', 4, 5),
(5, 'Pam', 'Beesly', 5, NULL),
(6, 'Andy', 'Bernard', 6, 8),
(7, 'Kevin', 'Malone', 7, 8),
(8, 'Angela', 'Martin', 8, NULL),
(9, 'Stanley', 'Hudson', 9, NULL),
(10, 'Toby','Flenderson', 10, 9),
(11, 'Kelly', 'Kapoor', 11, 9);