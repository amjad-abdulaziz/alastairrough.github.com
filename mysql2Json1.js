// Check dependencies 
//var http = require('http');
// Create the http server.
// reference: http://net.tutsplus.com/tutorials/javascript-ajax/node-js-for-beginners/

/***************
 * Correction 1: Using the request.on('close', function()( ... )-listener isn't required anymore.
 ***************/

/***************
http.createServer(function(req, res) {
    console.log('Receving request...');
    var callback = function(err, result) {
        res.writeHead(200, {
            'Content-Type': 'x-application/json'
        });
        console.log('json:', result);
        res.end(result);
    };

    getSQL(callback);

}).listen(3000);
***************/

// Access MySQL via node module mysql; not using node-mysql
// https://github.com/felixge/node-mysql
//function getSQL(callback) {
    var mysql = require('mysql');
    var fs = require('fs');
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '!',
        database: 'sitepoint'
  //      socketPath: '/var/run/mysqld/mysqld.sock', // socket for communication from debian <-> client, seems not to be set correcly by default?
    });

    connection.connect();
    var json = '';
    var query = 'SELECT * FROM totalLoadMaxMar23';

    connection.query(query, function(err, results, fields) {
        if (err)
            return callback(err, null);

//        console.log('The query-result is: ', results[0]);

        // wrap result-set as json
        json = JSON.stringify(results);

        /***************
         * Correction 2: Nest the callback correctly!
         ***************/
        connection.end();
// Display results on console
//        console.log('JSON-result:', json);
// Download query results from http://localhost:3000
//        callback(null, json);
// Output results to file
//        console.log('The query-result is in temp.json');
        fs.writeFile('temp.json',json)
    });
//};
