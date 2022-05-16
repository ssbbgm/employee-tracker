-- Insert department info
INSERT INTO department (name)
VALUE ('Sales');

INSERT INTO department (name)
VALUE ('Development');

INSERT INTO department (name)
VALUE ('Finance');

INSERT INTO department (name)
VALUE ('Legal');

-- Insert role info

INSERT INTO role(title, salary, department_id)
VALUE('Sales Associate', 40000, 1),
('Sales Lead', 60000, 1), 
('Entry Software Engineer', 80,000, 2),
('Mid Software Engineer', 120,000, 2),
('Lead Software Engineer', 180,000, 2),
('Financial Administrator', 60,000, 3),
('Accountant', 100,000, 3),
('Finance Manager', 130,000, 3),
('Chief Legal Officer', 250,000, 4),
('Legal Assistant', 60,000, 4),
('Contracts Administrator', 90,000, 4);

-- Insert employee info

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUE ('Jim', 'Halpert', 1, 2),
('Michael', 'Scott', 2, NULL),
('Dwigtht', 'Schrute', 3, 5),
('Ryan', 'Howard', 4, 5),
('Pam', 'Beesly', 5, NULL),
('Andy', 'Bernard', 6, 8),
('Kevin', 'Malone', 7, 8),
('Angela', 'Martin', 8, NULL),
('Stanley', 'Hudson', 9, NULL),
('Toby','Flenderson', 10, 9),
('Kelly', 'Kapoor', 11, 9);