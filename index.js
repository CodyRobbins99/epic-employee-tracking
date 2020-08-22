const mysql = require('mysql2');
const prompts = require('./utils/prompts');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  // Your MySQL username
  user: 'root',
  // Your MySQL password
  password: 'Biscuit6899!',
  database: 'employee_db'
});

connection.connect(err => {
  if (err) throw err;
  console.log('connected as id ' + connection.threadId + '\n');
  prompts();
  connection.end();
});
