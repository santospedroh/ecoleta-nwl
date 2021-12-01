// importar a dependencia do mysql
var mysql = require('mysql');

var con = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'rootpass',
    database: "nlwecoleta"
  });

con.connect(function(err) {
    if (err) throw err;
});

module.exports = con;