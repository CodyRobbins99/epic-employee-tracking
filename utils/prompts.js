const inquirer = require('inquirer');
const query = require('./queries');

function firstPrompt() {
    inquirer.prompt({
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: ['View All Departments','View All Roles','View All Employees','Add a Department','Add a Role', 'Add an Employee', 'Update an Employee Role', 'Quit Employee Tracker'],
        validate: actionInput => {
            if(actionInput) {
                return true;
            } else {
                console.log('Please select one of the above actions.');
                return false;
            }
        }
    })
    .then(response => {
        if(response.action === 'View All Departments' ) {
            query.viewAllDepartments();
        }
        else if(response.action === 'View All Roles') {
            query.viewAllRoles();
        }
        else if(response.action === 'View All Employees') {
            query.viewAllEmployees();
        }
        else if(response.action === 'Add a Department') {
            firstPrompt();
        }
        else if(response.action === 'Add a Role') {
            firstPrompt();
        }
        else if(response.action === 'Add an Employee') {
            firstPrompt();
        }
        else if(response.action === 'Update an Employee Role') {
            firstPrompt();
        }
        else if(response.action === 'Quit Employee Tracker') {
            return;
        }
    });
};

module.exports = firstPrompt;