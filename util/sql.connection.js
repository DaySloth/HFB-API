const mysql = require("mysql");
require("dotenv").config();

const connection = mysql.createConnection(process.env.JAWSDB_URI);

connection.connect(function (err) {
  if (err) {
    console.error("Error connecting: " + err.stack);
    return;
  }
  console.log("Connected as thread id: " + connection.threadId);
});

module.exports = connection;
