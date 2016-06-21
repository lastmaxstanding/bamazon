/*var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password:'servid0rmsql', //process.argv[2]
	database: 'BAMAZON'
})

connection.connect(function(err) {
	if (err) throw err;
	console.log('connected as id' + connection.threadId);
});


connection.query('SELECT * FROM bamazon1', function(err,data) {
if (err) throw err;
console.log(data);
});

/*var query = 'SELECT itemID, productName, departmentName, price, stockQuantity FROM bamazon1 WHERE ?';
    connection.query(query, function(err, data) {
        for (var i = 0; i < data.length; i++) {
            console.log(data[i].itemID);
        }
        runSearch();
    })

    */

var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", //Your username
    password: "servid0rmsql", //Your password
    database: "BAMAZON"
})

connection.connect(function(err) {
	if (err) throw err;
	console.log('connected as id' + connection.threadId);
});


connection.query('SELECT * FROM bamazon1', function(err,data) {
if (err) throw err;
console.log(data);
});

/*var rangeSearch = function() {
    inquirer.prompt([{
        name: "start",
        type: "input",
        message: "Enter starting position: ",
        validate: function(value) {
            if (isNaN(value) == false) {
                return true;
            } else {
                return false;
            }
        }

// use inquirer on homework



