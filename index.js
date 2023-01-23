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
                roleAdd();
                break

            case 'Update Employee Role':
                employeeUpdate();
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
        connection.query(query, function (err, res){
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
const DepartmentView = asyn () => {
    console.log('Departments Menu');
    try {
        let query = 'SELECT * FROM department';
        connection.query(query, function (err, res)
        {
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
//Need to add the selection to add a new employee.
//Need to add the selection to add a new department.
//Need to add the selection to add a new role.
//Need to add the selection to update the role for a specific employee. 

    
