// Dependencies 
const mysql = require('mysql2');
const inquirer = require('inquirer');
const { listenerCount } = require('mysql2/lib/pool');

// Mysql connection creation
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  // Your MySQL username
  user: 'root',
  // Your MySQL password
  password: 'Biscuit6899!',
  database: 'employee_db'
});

// Connection to Mysql database
connection.connect(err => {
  if (err) throw err;

  console.log(`

    ╭━━━╮╭━━━╮╭━━╮╭━━━╮ ╭━━━╮╭━╮╭━╮╭━━━╮╭╮╱╱╱╭━━━╮╭╮╱╱╭╮╭━━━╮╭━━━╮ ╭━━━━╮╭━━━┳━━━╮╭━━━╮╭╮╭━╮╭━━╮╭━╮╱╭╮╭━━━╮
    ┃╭━━╯┃╭━╮┃╰┫┣╯┃╭━╮┃ ┃╭━━╯┃┃╰╯┃┃┃╭━╮┃┃┃╱╱╱┃╭━╮┃┃╰╮╭╯┃┃╭━━╯┃╭━━╯ ┃╭╮╭╮┃┃╭━╮┃╭━╮┃┃╭━╮┃┃┃┃╭╯╰┫┣╯┃┃╰╮┃┃┃╭━╮┃
    ┃╰━━╮┃╰━╯┃╱┃┃╱┃┃╱╰╯ ┃╰━━╮┃╭╮╭╮┃┃╰━╯┃┃┃╱╱╱┃┃╱┃┃╰╮╰╯╭╯┃╰━━╮┃╰━━╮ ╰╯┃┃╰╯┃╰━╯┃┃╱┃┃┃┃╱╰╯┃╰╯╯╱╱┃┃╱┃╭╮╰╯┃┃┃╱╰╯
    ┃╭━━╯┃╭━━╯╱┃┃╱┃┃╱╭╮ ┃╭━━╯┃┃┃┃┃┃┃╭━━╯┃┃╱╭╮┃┃╱┃┃╱╰╮╭╯╱┃╭━━╯┃╭━━╯ ╱╱┃┃╱╱┃╭╮╭┫╰━╯┃┃┃╱╭╮┃╭╮┃╱╱┃┃╱┃┃╰╮┃┃┃┃╭━╮
    ┃╰━━╮┃┃╱╱╱╭┫┣╮┃╰━╯┃ ┃╰━━╮┃┃┃┃┃┃┃┃╱╱╱┃╰━╯┃┃╰━╯┃╱╱┃┃╱╱┃╰━━╮┃╰━━╮ ╱╱┃┃╱╱┃┃┃╰┫╭━╮┃┃╰━╯┃┃┃┃╰╮╭┫┣╮┃┃╱┃┃┃┃╰┻━┃
    ╰━━━╯╰╯╱╱╱╰━━╯╰━━━╯ ╰━━━╯╰╯╰╯╰╯╰╯╱╱╱╰━━━╯╰━━━╯╱╱╰╯╱╱╰━━━╯╰━━━╯ ╱╱╰╯╱╱╰╯╰━┻╯╱╰╯╰━━━╯╰╯╰━╯╰━━╯╰╯╱╰━╯╰━━━╯` + `\n`);

  firstPrompt();
});

// First prompt / Main menu
async function firstPrompt() {
  const prompt = await inquirer.prompt({
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
          'View All Departments',
          'View All Roles',
          'View All Employees',
          'Add a Department',
          'Add a Role',
          'Add an Employee',
          'Update an Employee Role',
          'Quit Employee Tracker'
      ]
  });

  // Checks response from prompt.action runs matching function
  if(prompt.action === 'View All Departments' ) {
    viewAllDepartments();
  }
  else if(prompt.action === 'View All Roles') {
    viewAllRoles();
  }
  else if(prompt.action === 'View All Employees') {
    viewAllEmployees();
  }
  else if(prompt.action === 'Add a Department') {
    addADepartment();
  }
  else if(prompt.action === 'Add a Role') {
    addARole();
  }
  else if(prompt.action === 'Add an Employee') {
    addAnEmployee();
  }
  else if(prompt.action === 'Update an Employee Role') {
    updateEmployeeRole();
  }

  // END THE CONNECTION
  else if(prompt.action === 'Quit Employee Tracker') {
    console.log(`\n` + `

    ╭━━━╮╭━━━╮╭━━━╮╭━━━╮╭━━╮╱╭╮╱╱╭╮╭━━━╮
    ┃╭━╮┃┃╭━╮┃┃╭━╮┃╰╮╭╮┃┃╭╮┃╱┃╰╮╭╯┃┃╭━━╯
    ┃┃╱╰╯┃┃╱┃┃┃┃╱┃┃╱┃┃┃┃┃╰╯╰╮╰╮╰╯╭╯┃╰━━╮
    ┃┃╭━╮┃┃╱┃┃┃┃╱┃┃╱┃┃┃┃┃╭━╮┃╱╰╮╭╯╱┃╭━━╯
    ┃╰┻━┃┃╰━╯┃┃╰━╯┃╭╯╰╯┃┃╰━╯┃╱╱┃┃╱╱┃╰━━╮
    ╰━━━╯╰━━━╯╰━━━╯╰━━━╯╰━━━╯╱╱╰╯╱╱╰━━━╯` + `\n`);
    connection.end();
  }
};

// Query to view all departments
const viewAllDepartments = () => {
  connection.query(`SELECT department.id AS department_id, department.name AS department_name FROM department`, function(err, res) {
      if(err) throw err;

      console.table(res);
      console.log("\n");

      // return to first prompt
      firstPrompt();
  });
};

// Query to view all roles
const viewAllRoles = () => {
  connection.query(`SELECT employee_role.*, department.name AS department_name 
  FROM employee_role
  LEFT JOIN department ON employee_role.department_id = department.id 
  ORDER BY employee_role.department_id`, function(err, res) {
      if(err) throw err;

      console.table(res);
      console.log("\n");

      // return to first prompt
      firstPrompt();
  });
};

// STILL NEED MANAGERS NAME ON VIEW ALL EMPLOYEES
// Query to view all employees
const viewAllEmployees = () => {
  connection.query(`SELECT employee.id, employee.first_name, employee.last_name, employee_role.title AS job_title, employee_role.salary, department.name AS department_name,
  CONCAT(manager.first_name, " ", manager.last_name) AS manager
  FROM employee
  LEFT JOIN employee_role ON employee.role_id = employee_role.id
  LEFT JOIN department ON employee_role.department_id = department.id
  LEFT JOIN employee manager ON manager.id = employee.manager_id
  ORDER BY employee.manager_id`, function(err, res) {
      if(err) throw err;

      console.table(res);
      console.log("\n");

      // return to first prompt
      firstPrompt();
  });
};

// Query to add a department 
const addADepartment = () => {
  inquirer.prompt({
    type: 'input',
    name: 'departmentName',
    message: 'What would you like to name the new department?',
    validate: departmentNameInput => {
      if(departmentNameInput) {
          return true;
      } else {
          console.log("Please enter a department name before continuing.");
          return false;
      }
    }
  }).then(answer => {
    connection.query(`INSERT INTO department SET ?`, {
      name: answer.departmentName
    });
    console.log(`\n New department added to the database... \n`);

    // Return to first prompt
    firstPrompt();
  });
};

// Query to add a role
const addARole = () => {
  connection.query(`SELECT * FROM department`, function (err, res) {
    if(err) throw err;

    inquirer.prompt([
      {
        type: 'input',
        name: 'roleTitle',
        message: 'Please enter a title for the new role.',
        validate: roleTitleInput => {
          if(roleTitleInput) {
              return true;
          } else {
              console.log("Please enter a title before continuing.");
              return false;
          }
        }
      },
      {
        type: 'input',
        name: 'salary',
        message: 'Please enter a salary for this role (DO NOT INCLUDE commas or decimals).',
        validate: salaryInput => {
          if(salaryInput) {
              return true;
          } else {
              console.log("Please enter a salary before continuing.");
              return false;
          }
        }
      },
      {
        type: 'list',
        name: 'department',
        message: 'Please select the department associated with the role',
        choices: function() {
          var departmentArray = [];

          res.forEach(department => {
            departmentArray.push(department.name)
          });
          return departmentArray;
        }
      }
    ]).then(answer => {
      connection.query(`SELECT * FROM department WHERE ?`, { name: answer.department }, function(err, res) {
        if(err) throw err;

        const roleSalary = parseInt(answer.salary);

        connection.query(`INSERT INTO employee_role SET ?`, {
          title: answer.roleTitle,
          salary: roleSalary,
          department_id: res[0].id
        });
        console.log(`\n New role added to the database... \n`);

        // Return to first prompt
        firstPrompt();
      });
    });
  });
};

// Query to add an employee
const addAnEmployee = () => {
  connection.query(`SELECT * FROM employee_role`, function(err, res) {
    if(err) throw(err);
    inquirer.prompt([
      {
        type: 'input',
        name: 'firstName',
        message: "What is the employee's first name?",
        validate: firstNameInput => {
          if(firstNameInput) {
              return true;
          } else {
              console.log("Please enter a first name before continuing.");
              return false;
          }
        }
      },
      {
        type: 'input',
        name: 'lastName',
        message: "What is the employee's last name?",
        validate: lastNameInput => {
          if(lastNameInput) {
              return true;
          } else {
              console.log("Please enter a last name before continuing.");
              return false;
          }
        }
      },
      {
        type: 'list',
        name: 'role',
        message: 'Please select a role for your employee from the list below.',
        choices: function() {
          rolesArray = [];

          res.forEach(role => {
            rolesArray.push(role.title)
          });
          return rolesArray;
        }
      }
    ])
    .then(answer => {
      const roleTitle = answer.role; 

      connection.query(`SELECT employee.first_name, employee.last_name FROM employee`, function(err, managerRes) {
        if (err) throw err;
        inquirer.prompt(
          {
            type: 'list',
            name: 'managerName',
            message: 'Who is the manager of this employee?',
            choices: function() {
              employeeArray = [];
              managerRes.forEach(employee => {
                var firstName = employee.first_name;
                var lastName = employee.last_name;
                var space = ' ';
                var employeeName = firstName.concat(space, lastName);
                employeeArray.push(employeeName);
              });
              return employeeArray;
            }
          }).then(managerAnswer => {
            const managerFirst = managerAnswer.managerName.split(' ')[0];
            const managerLast = managerAnswer.managerName.split(' ')[1];
            
            connection.query(`SELECT employee.id FROM employee WHERE ? AND ?`,[{first_name: managerFirst},{last_name: managerLast}], function(err, idRes){
              if (err) throw err;
              const managerId = idRes[0].id;

              connection.query(`SELECT * FROM employee_role WHERE ?`, { title: roleTitle }, function(err, res) {
                    if(err) throw err;
            
                    connection.query(`INSERT INTO employee SET ?`, {
                      first_name: answer.firstName,
                      last_name: answer.lastName,
                      role_id: res[0].id,
                      manager_id: managerId
                    });
                    console.log(`\n New employee added to the database... \n`);
            
                    // Return to first prompt
                    firstPrompt();
                });
            });
          });
      });
    });
  });
};

// Query to update an employee's role
const updateEmployeeRole = () => {
  connection.query(`SELECT employee.first_name, employee.last_name FROM employee`, function(err, res) {
    if(err) throw err;
    
    inquirer.prompt({
      type: 'list',
      name: 'specifiedEmployee',
      message: "Which employee's role would you like to update?",
      choices: function() {
        employeeArray = [];
        res.forEach(employee => {
          var firstName = employee.first_name;
          var lastName = employee.last_name;
          var space = ' ';
          var employeeName = firstName.concat(space, lastName);
          employeeArray.push(employeeName);
        });
        return employeeArray;
      }
    }).then(answer => {
      const employeeFirst = answer.specifiedEmployee.split(' ')[0];
      const employeeLast = answer.specifiedEmployee.split(' ')[1];

      connection.query(`SELECT * FROM employee_role`, function(err, res) {
        if(err) throw(err);

        inquirer.prompt(
          {
            type: 'list',
            name: 'updatedRole',
            message: `Please select a new role for your ${answer.specifiedEmployee} from the list below.`,
            choices: function() {
              rolesArray = [];
    
              res.forEach(role => {
                rolesArray.push(role.title)
              });
              return rolesArray;
            }
        }).then(result => {
          console.log(result.updatedRole);

          connection.query(`SELECT employee_role.id FROM employee_role WHERE ?`, { title: result.updatedRole }, function(err, roleRes) {

            if(err) throw err;

            connection.query(`UPDATE employee SET ? WHERE ? AND ?`,
            [
              {
                role_id: roleRes[0].id
              },
              {
                first_name: employeeFirst
              },
              {
                last_name: employeeLast
              }
            ]);
            console.log(`\n employee's role has been updated in the database... \n`);

            //return to first prompt
            firstPrompt();
          });
        });
      });
    });
  });
};