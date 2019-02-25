var connection = require("./connection");
var orm = {
    selectAll: function(whatToSelect, tableInput){
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString,[whatToSelect, tableInput],  function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function(cols, vals, cb) {
        var queryString = "INSERT INTO burgers" ;
    
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
    
        console.log(queryString);
    
        connection.query(queryString, vals, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      
    },
    updateOne: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;
    
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
    
        console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
    }
}