var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	username: 'root',
	password:'',
	database: 'aolai',
	
});

module.exports = connection;
