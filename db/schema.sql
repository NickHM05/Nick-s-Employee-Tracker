DROP DATABASE IF EXISTS employee_db;
CREATE database employee_db;

CREATE TABLE Department(
    id INTEGER AUTO_INCREMENT NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE Role (
    id INTEGER AUTO_INCREMENT NOT NULL,
    Title VARCHAR(35) NOT NULL,
    Salary DECIMAL (10, 0) NOT NULL, 
    DepartmentId INTEGER,
    PRIMARY KEY (id)
    );


CREATE TABLE Employee (
    id INTEGER AUTO_INCREMENT NOT NULL,
    First_Name VARCHAR(35) NOT NULL,
    LastName VARCHAR(35 NOT NULL),
    RoleId INTEGER,
    ManagerId INTEGER,
    PRIMARY KEY (id)
);
