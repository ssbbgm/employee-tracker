
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
        "View all departments",
        "View all employees by manager",
        "Add employee",
        "Add role",
        "Add department",
        "Update employee role",
        "Exit",
      ]
    })
    .then((answer) => {
        // Switch case depending on user option
        switch (answer.menu) {

          case "View all departments":
                viewDepts();
                break;

          case "View all roles":
                viewRoles();
                break;

            case "View all employees":
                viewEmployees();
                break;          
                
            case "Add department":
                addDept();
                break;

            case "Add role":
                addRole();
                break;

            case "Add employee":
                addEmployee();
                break;

            case "Update employee role":
                updateEmpRole();
                break;

            case "Exit":
                connection.end();
                break;
            }
     });
}//end of Start Menu function


const viewDepts = () => {
  let query = `SELECT * FROM department`;
  connection.query(query, function (err, rows) {
    console.table(rows);
    startMenu();
  });
}

const viewRoles = () => {
  let query = `SELECT * FROM role`;
  connection.query(query, function (err, rows) {
    console.table(rows);
    startMenu();
  });
}

const viewEmployees = () => {
    let query = `SELECT employee.id, employee.first_name, employee.last_name, role.title, employee.manager_id, department.name AS department, role.salary FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department on role.department_id = department.id`;
    connection.query(query, function (err, rows) {
      console.table(rows);
      startMenu();
    });
}

const addDept = () => {
  inquirer
    .prompt({
      type: "input",
      message: "Enter the name of the new department",
      name: "newDept",
       validate: function (newDept) {
        if (newDept.length <= 1) {
            return console.log("Please provide a department name!");
        }
        return true;
      }
    })
    .then(function (res) {
      const query = `INSERT INTO department (name) VALUE ("${res.newDept}")`;
      connection.query(query, function (err, rows) {
        if (err) {
          throw err;
        } else {
        console.log(`\n${res.newDept} has been added!\n`);
        viewDepts();
        startMenu();
        }
      })
    });
}

// const addRole = () => {
//   inquirer
//     .prompt({
//       type: "input",
//       message: "Enter the role's title",
//       name: "title",
//        validate: function (title) {
//         if (title.length <= 1) {
//           return console.log("Please provide a title for the role!");
//         }
//         return true;
//       },
//       type: "number",
//       message: "Enter the role's annual salary",
//       name: "salary",
//        validate: function (salary) {
//         if (salary <= 10000) {
//             return console.log("Please provide a valid salary amount!");
//         }
//         return true;
//       },
//       type: "number",
//       message: "Enter the role's department ID",
//       name: "id",
//        validate: function (id) {
//         if (id <= 0) {
//           return console.log("Please provide a department id for the role!");
//         }
//         return true;
//       }
//     })
//     .then(function (res) {
//       const title = res.title;
//       const salary = res.salary;
//       const departmentID = res.id;
//       const query = `INSERT INTO role (title, salary, department_id) VALUES ("${title}", "${salary}", "${departmentID}")`;
//       connection.query(query, function (err, rows) {
//         if (err) {
//           throw err;
//         }
//         console.table(rows);
//         startMenu();
//       });
//     });
// }

const addRole = () => { 
  connection.query("SELECT role.title AS Title, role.salary AS Salary FROM role",   function(err, res) {
    inquirer
        .prompt([
          {
          type: "input",
          message: "Enter the role's title",
          name: "title",
           validate: function (title) {
            if (title.length <= 1) {
              return console.log("Please provide a title for the role!");
            }
            return true;
            }
          },
          {
          type: "input",
          message: "Enter the role's annual salary",
          name: "salary",
           validate: function (salary) {
            if (salary <= 10000) {
                return console.log("Please provide a valid salary amount!");
            }
            return true;
          }
          },
          {
          type: "number",
          message: "Enter the role's department ID",
          name: "id",
           validate: function (id) {
            if (id <= 0) {
              return console.log("Please provide a department id for the role!");
            }
            return true;
            }
          }
        ])
      })
    connection.promise().query(`INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`)
          .then(function(res) {
            `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`,
            {
              title: res.title,
              salary: res.salary,
              id: res.id
            },
            function(err, row) {
                if (err) throw err
                console.table(row);
                startMenu();
            }
          })
        }
