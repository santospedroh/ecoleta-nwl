// importar a dependencia do mysql
var mysql = require('mysql');

var con = mysql.createConnection({
    host     : process.env.HOSTDB ,  //'172.18.0.2',
    user     : process.env.USERDB ,  //'root',
    password : process.env.PASSDB ,  //'rootpass',
    database : process.env.SCHEDB ,  //"nlwecoleta"
  });

con.connect(function(err) {
    if (err) throw err;
});

module.exports = con;