const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    // Your MySQL username
    user: 'root',
    // Your MySQL password
    password: 'Biscuit6899!',
    database: 'employee_db'
});

const viewAllDepartments = () => {
    connection.query(`SELECT department.id AS department_id, department.name AS department_name FROM department`, function(err, res) {
        if(err) throw err;
  
        console.table(res);
    });
};

const viewAllRoles = () => {
    connection.query(`SELECT employee_role.*, department.name AS department_name 
    FROM employee_role
    LEFT JOIN department ON employee_role.department_id = department.id 
    ORDER BY employee_role.department_id`, function(err, res) {
        if(err) throw err;

        console.table(res);
    });
};

// STILL NEED MANAGERS NAME ON VIEW ALL EMPLOYEES
const viewAllEmployees = () => {
    connection.query(`SELECT employee.id, employee.first_name, employee.last_name, employee_role.title AS job_title, employee_role.salary, department.name AS department_name
    FROM employee
    LEFT JOIN employee_role ON employee.role_id = employee_role.id
    LEFT JOIN department ON employee_role.department_id = department.id
    ORDER BY employee.first_name`, function(err, res) {
        if(err) throw err;

        console.table(res);
    });
};


module.exports = {
    viewAllDepartments,
    viewAllRoles,
    viewAllEmployees}
