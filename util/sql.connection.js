const mysql = require("mysql");

module.exports = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Batmanisc00l",
  database: 'hfbmobile_db'
});
