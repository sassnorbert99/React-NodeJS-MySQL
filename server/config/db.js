const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "sassnorbert99",
  database: "employeeSystem",
});

module.exports = db;
