var mysql = require("mysql");
var connection;

//Connects to JawsDB so we can deploy to Heroku
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL); 
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'JHU2020',
    database: 'burgers_db'
  });
}

//Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});



// Export connection for our ORM to use.
module.exports = connection;