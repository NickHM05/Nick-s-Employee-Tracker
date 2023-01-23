INSEERT INTO Department(name)
VALUES
    ('Executive'),
    ('Engineering'),
    ('Sales'),
    ('Finance'),
    ('Legal');

INSERT INTO Role (Title, Salary, DepartmentId)
VALUES
    ('CEO', '$300,000', 1),
   2 ('Director of Engineering', '225,000', 2),
   3 ('Lead Engineer', '$125,000', 2),
   4 ('Engineer', '$77,000', 2),
    ('Engineering Intern', '$40,000', 2),
   6 ('Sales Director', '$250,000', 3),
    ('Sales Lead Management', '$110,000', 3),
    ('Salesperson', '$80,000', 3),
   9 ('CFO', '$275,000', 4),
    ('Head Accountant', '$110,000', 4),
   11 ('Accountant', '$75,000', 4),
  12  ('Corporate Attorney', '175,000', 5),
  13  ('Contract Lawyer', '$100,000', 5),
   14 ('Legal Assitant', '$50,000', 5);

INSERT INTO Employee (First_Name, LastName, RoleId, ManagerId)
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