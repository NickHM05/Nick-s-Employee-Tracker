DROP DATABASE IF EXISTS employee_db;
CREATE database employee_db;

USE employee_db;

CREATE TABLE department(
    id INT AUTO_INCREMENT NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(35) NOT NULL,
    salary DECIMAL (10, 0) NOT NULL, 
    department_ID INTEGER,
    PRIMARY KEY (id)
    );


CREATE TABLE employee (
    id INTEGER AUTO_INCREMENT NOT NULL,
    First_Name VARCHAR(35) NOT NULL,
    Last_Name VARCHAR(35) NOT NULL,
    role_id INT,
    manager_id INT,
    PRIMARY KEY (id)
);
