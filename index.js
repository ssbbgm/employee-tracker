const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');
// Import and require inquirer
const inquirer = require('inquirer');
// Import and require console.table
const inquirer = require('console.table');



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
