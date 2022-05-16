
// Import and require mysql2
const mysql = require('mysql2');
// Import and require inquirer
const inquirer = require('inquirer');
// Import and require console.table
const cTable = require('console.table');



// Connect to database
const connection = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'rootroot',
    database: 'company_db'
  },
  console.log(`Connected to the company_db database.`)
);

//Connect to inquirer main questions
connection.connect(function (err) {
    if (err) throw err;
    startMenu();
  });


const startMenu = () => {
    inquirer
    .prompt({
      name: "menu",
      type: "list",
      message: "Welcome to the menu!",
      choices: [
        "View all employees",
        "View all employees by role",
        "View all employees by department",
        "View all employees by manager",
        "Add employee",
        "Add role",
        "Add department",
        "Update employee role",
      ]
    })
}