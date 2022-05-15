DROP DATABASE IF EXISTS company_db;

-- Creating the database 
CREATE DATABASE company_db;

-- Using this database
USE company_db;

-- Creating the department table
CREATE TABLE department(
   id INT AUTO_INCREMENT,
   name VARCHAR(30) NOT NULL,
   PRIMARY KEY (id)
);

-- Creating the role table
CREATE TABLE role(
   id INT AUTO_INCREMENT,
   title VARCHAR(30) NOT NULL,
   salary DECIMAL(7,2),
   department_id INT,
   PRIMARY KEY (id),
   FOREIGN KEY (department_id) REFERENCES department(id)
);

-- Creating the employee table
CREATE TABLE employee(
   id INT AUTO_INCREMENT,
   first_name VARCHAR(30) NOT NULL,
   last_name VARCHAR(30) NOT NULL,
   role_id INT,
   manager_id INT,
   PRIMARY KEY(id),
   FOREIGN KEY (role_id) REFERENCES role(id),
   FOREIGN KEY (manager_id) REFERENCES employee(id)
);