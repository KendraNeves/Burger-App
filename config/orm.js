var connection = require("../config/connection.js");


// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }
  // translate array of strings to a single comma-separated string
  return arr.toString();
}


const orm = {
 
  selectAll: (tableName) => {
    let queryString = "SELECT * FROM ??"; 
    //SELECT * FROM burgers
    connection.query(queryString, [tableName], (error, result) => {
      if (error) throw error;
      console.log(result);
      return result;
    });
  },

  insertOne: (tableName, tableCol, newValue) => {
    let queryString = "INSERT INTO ?? (??) VALUES (?)"; 
    // INSERT INTO burgers (burger_name) VALUES (newValue)
    connection.query(queryString, [tableName, tableCol, newValue], (error, result) => {
      if (error) throw error;
      console.log(result);
    });
  }, 

  updateOne: (table, objColVals, condition) => {  
    // An example of objColVals would be (javascript) {devoured: true}
    // The condition could be (javascript) {burger_name: "Big Mac"}
    // (SQL) UPDATE burgers SET devoured=true WHERE burger_name="Big Mac"
      let queryString = "UPDATE " + table;
  
      queryString += " SET ";
      queryString += objToSql(objColVals);
      queryString += " WHERE ";
      queryString += condition;
  
      console.log(queryString);
      connection.query(queryString, (error, result) => {
        if (error) {
          throw error;
        }
        return result;
      });

  } 

};

module.exports = orm;

