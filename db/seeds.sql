INSERT INTO employee (First_Name, Last_Name, role_id, manager_id)
VALUES
    ('David', 'Wallace', 1, NULL),
    ('Jim', 'Halpert', 2, 1),
    ('Toby', 'Flenderson', 3, 2),
    ('Creed', 'Bratton', 4, 3),
    ('Kelly', 'Kapoor', 4, 3),
    ('Meredith', 'Palmer', 5, 3),
    ('Michael', 'Scott', 6, 1),
    ('Andy', 'Bernard', 7, 6),
    ('Ryan', 'Howard', 8, 7),
    ('Phyllis', 'Vance', 8, 7),
    ('Stanley', 'Hudson', 9, 1),
    ('Angela', 'Martin', 10, 9),
    ('Oscar', 'Martinez', 11, 10),
    ('Kevin', 'Malone', 11, 10),
    ('Dwight', 'Schrute', 12, 1),
    ('Daryll', 'Philbin', 13, 12),
    ('Pam', 'Beesly', 13, 12),
    ('Erin', 'Hannon', 14, 12);
    
INSERT INTO department (department_name)
VALUES
    ('Executive'),
    ('Engineering'),
    ('Sales'),
    ('Finance'),
    ('Legal');

INSERT INTO role (title, salary, department_ID)
VALUES
    ('CEO', '300000', 1),
    ('Director of Engineering', '225000', 2),
    ('Lead Engineer', '125000', 2),
    ('Engineer', '77000', 2),
    ('Engineering Intern', '40000', 2),
    ('Sales Director', '250000', 3),
    ('Sales Lead Management', '110000', 3),
    ('Salesperson', '80000', 3),
    ('CFO', '275000', 4),
    ('Head Accountant', '110000', 4),
    ('Accountant', '75000', 4),
    ('Corporate Attorney', '175000', 5),
    ('Contract Lawyer', '100000', 5),
    ('Legal Assitant', '50000', 5);

