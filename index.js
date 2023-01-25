//Dependencies
const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require('console.table');
const util = require('util');

//Putting the connection to MySQL here instead of another file to streamline and make the code easier to follow and read.
let connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '$Nick0608',
    database: 'employee_db'
});

connection.query = util.promisify(connection.query);

//Intialize the application after the connection has been made. 
connection.connect(function (err) {
    if (err) throw err;
    initialize();
})

console.table(
    "\n,-----------Nick's Employee Tracker--------\n"
)

//Bring up the menu for the user to use
const initialize = async () => {
    try {
        let answer = await inquirer.prompt({
            name: 'action',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                'View All Employees',
                'View All Departments',
                'View All Roles',
                'Add Employee',
                'Add Department',
                'Add Role',
                'Update Employee Role',
                'Exit'
            ]
        });
        switch (answer.action) {
            case 'View All Employees':
                EmployeeView();
                break;

            case 'View Department':
                DepartmentView();
                break;

            case 'View All Roles':
                RoleView();
                break;

            case 'Add Employee':
                employeeAdd();
                break

            case 'Add Department':
                departmentAdd();
                break

            case 'Add Role':
                AddRole();
                break

            case 'Update Employee Role':
                updateEmployee();
                break

            case 'Exit':
                connection.end();
                break;
        };
    } catch (err) {
        console.log(err);
        initialize();
    };
}

// Here will be the selection to view all of the employees for the user.
const EmployeeView = async () => {
    console.log('Employees Menu');
    try {
        let query = 'SELECT * FROM employee';
        connection.query(query, function (err, res) {
            if (err) throw err;
            let employeeArray = [];
            res.forEach(employee => employeeArray.push(employee));
            console.table(employeeArray);
            initialize();
        });
    } catch (err) {
        console.log(err);
        initialize();
    };
}

//the Department Selection view will be here next. 
const DepartmentView = async () => {
    console.log('Departments Menu');
    try {
        let query = 'SELECT * FROM department';
        connection.query(query, function (err, res) {
            if (err) throw err;
            let departmentArray = [];
            res.forEach(department => departmentArray.push(department));
            console.table(departmentArray);
            initialize();
        });
    } catch (err) {
        console.log(err);
        initialize();
    };
}

//Need to add the selection to view all the roles.
const RoleView = async () => {
    console.log('Role Menu');
    try {
        let query = 'SELECT * FROM role';
        connection.query(query, function (err, res) {
            if (err) throw err;
            let RoleArray = [];
            res.forEach(role => RoleArray.push(role));
            console.table(RoleArray);
            initialize();
        });
    } catch (err) {
        console.log(err);
        initialize();
    };
}
//Need to add the selection to add a new employee.
const employeeAdd = async () => {
    try {
        console.log('Add Employee');
        let RolesAdded = await connection.query("SELECT * FROM role");
        let ManagersAdded = await connection.query("SELECT * FROM Employee");
        let answer = await inquirer.prompt([
            {
                name: 'FirstName',
                type: 'input',
                message: 'What is the Employees first name?'
            },
            {
                name: 'LastName',
                type: 'input',
                message: 'What is the Employees last name?'
            },
            {
                name: 'EmployeeRoleId',
                type: 'list',
                choices: RolesAdded.map((role) => {
                    return {
                        name: role.title,
                        value: role.id
                    }
                }),
                message: "What is the Employee's Role ID?"
            },
            {
                name: 'EmployeeManagerId',
                type: 'list',
                choices: ManagersAdded.map((manager) => {
                    return {
                        name: manager.First_Name + " " + manager.Last_Name,
                        value: manager.id
                    }
                }),
                message: "What is the Manager's Id for this Employee?"
            }
        ])

        let result = await connection.query("INSERT INTO employee SET ?", {
            First_Name: answer.FirstName,
            Last_Name: answer.LastName,
            roleID: (answer.EmployeeRoleId),
            manager_id: (answer.EmployeeManagerId)
        });

        console.log(`${answer.FirstName} ${answer.LastName} was added successfully.\n`);
        initialize();
    } catch (err) {
        console.log(err);
        initialize();
    };
}

//Need to add the selection to add a new department.
const departmentAdd = async () => {
    try {
        console.log('Add Department');

        let answer = await inquirer.prompt([
            {
                name: 'DepartmentName',
                type: 'input',
                message: 'What is the name of the the new department you are adding?'
            }
        ]);

        let result = await connection.query("INSERT INTO department SET ?", {
            departmentContext: answer.DepartmentName
        });
        console.log(`${answer.DepartmentName} added succesfully to the list of departments. \n`)
        initialize();
    } catch (err) {
        console.log(err);
        initialize();
    };
}

//Need to add the selection to add a new role.
const AddRole = async () => {
    try {
        console.log('Role Added');

        let departments = await connection.query("SELECT * FROM department")

        let Answer = await inquirer.prompt([
            {
                name: 'title',
                type: 'input',
                message: 'What is the name of the role you are adding?'
            },
            {
                name: 'salary',
                type: 'input',
                message: 'What salary does this role deserve?'
            },
            {
                name: 'departmentID',
                type: 'list',
                choices: departments.map((departmentID) => {
                    return {
                        name: departmentID.departmentContext,
                        value: departmentID.id
                    }
                }),
                message: 'What department IS of this role is it associated with?',
            }
        ]);

        let departmentChosen;
        for (i = 0; i < departments.length; i++) {
            if (departments[i].department_ID === answer.choice) {
                departmentChosen = departments[i];
            };
        }
        let result = await connection.query("INSERT INTO role SET ?", {
            title: answer.title,
            slary: answer.salary,
            department_ID: answer.departmentID
        })

        console.log(`${answer.title} The Role was added successfully! \n`)
        initialize();

    } catch (err) {
        console.log(err);
        initialize();
    };
}

//Need to add the selection to update the role for a specific employee.
const updateEmployee = async () => {
    try {
        console.log('Employee got an Update');
        
        let employees = await connection.query("SELECT * FROM employee");

        let employeeSelected = await inquirer.prompt([
            {
                name: 'employee',
                type: 'list',
                choices: employees.map((employeeName) => {
                    return {
                        name: employeeName.first_name + " " + employeeName.last_name,
                        value: employeeName.id
                    }
                }),
                message: 'Please choose an employee to update.'
            }
        ]);

        let roles = await connection.query("SELECT * FROM role");

        let roleSelected = await inquirer.prompt([
            {
                name: 'role',
                type: 'list',
                choices: roles.map((nameRole) => {
                    return {
                        name: nameRole.title,
                        value: nameRole.id
                    }
                }),
                message: 'Please select the role to update the employee with.'
            }
        ]);

        let result = await connection.query("UPDATE employee SET ? WHERE ?", [{ role_id: roleSelected.role }, { id: employeeSelected.employee }]);

        console.log(`The role was successfully updated to our list.\n`);
        initialize();

    } catch (err) {
        console.log(err);
        initialize();
    };
}

