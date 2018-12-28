//ferryfact.js
// Updates the Alexa skill "ferry fact" which current schedule and status for ferry service between Langdale and Horseshoe Bay
// Design:
//   Read updated data from MySQL database for ferry sailings updated for website http://alastairrough.github.io/sunshine.html
//   Create a digest of current status e.g. is the fery busy today? when is the next sailing? is the ferry on time?
//   Modify the SQL view that populates http://alastairrough.github.io/sailingReport.html
//   Update the entry in Alexa's /skill-sample-ferry/skill-sample-nodejs-fact/lambda/custom/index.js
//   Re-deploy skill to Amazon Lambda service "ask deploy"

/////////////////////////
// This version uses regexp to replace answer strings in index.js but fails so far.
/////////////////////////

var mysql = require('mysql');
var fs = require('fs');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'alastair',
    password: '',
    database: 'sitepoint'
});

var replacement;
replacement = '';

connection.connect();
//var query = 'SELECT * FROM ferryfactJan2;';
var query = 'SELECT * FROM totalLoadMaxJan2;';


// console.log(query);
connection.query(query, function(err, results, fields) {
    if (err)
        console.log("Error: " + err);

    var json = JSON.stringify(results);
    // console.log('results = ' + results);
    // parse the json object
    var obj = JSON.parse(json);
    //    for (var i = 0; i < obj.length; i++) {
    for (var i = 0; i < 4; i++) {
        var row = "'Ferry load " + obj[i].CaptureDate +
            " for " + obj[i].sailingTime + " sailing " +
            " from " + obj[i].Departing +
            //            " was " + obj[i].busy_quiet + " at " + obj[i].totalLoad +
            " was " + " at " + obj[i].totalLoad +
            " percent, thanks.',"

        replacement = replacement + row + '\n';
        //        console.log(replacement);

    };

    // output to new lambda index.js
    fs.readFile('index.js', 'utf8', function(err, data) {
        if (err) {
            return console.log(err);
        }

        //       var insert = 'bla'; // replace with SQL read
        //       console.log(insert);
        var result = data.replace(/(\/\/starthere)[\s\S]+(\/\/endhere)/m, '\/\/starthere\nconst data = [\n' + replacement + '];\n\/\/endhere\n');

        fs.writeFile('indexout3.js', result, 'utf8', function(err) {
            if (err) return console.log(err);
            // success case, the file was saved
            console.log('busyquiet saved!');
        });

    });
    connection.end();

});
