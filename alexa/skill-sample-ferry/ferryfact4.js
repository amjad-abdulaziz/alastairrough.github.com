//ferryfact.js
// Updates the Alexa skill "ferry fact" which current schedule and status for ferry service between Langdale and Horseshoe Bay
// Design:
//   Read updated data from MySQL database for ferry sailings updated for website http://alastairrough.github.io/sunshine.html
//   Create a digest of current status e.g. is the fery busy today? when is the next sailing? is the ferry on time?
//   Modify the SQL view that populates http://alastairrough.github.io/sailingReport.html
//   Update the entry in Alexa's /skill-sample-ferry/skill-sample-nodejs-fact/lambda/custom/index.js
//   Re-deploy skill to Amazon Lambda service "ask deploy"

var concat = require('concat-files');
var mysql = require('mysql');
var fs = require('fs');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'alastair',
    password: '',
    database: 'sitepoint'
});

connection.connect();
var query = 'SELECT * FROM ferryfactJan2;';

connection.query(query, function (err, results, fields) {
    if (err)
        //        return callback(err, null);
        console.log("Error: " + err);

    var json = JSON.stringify(results);
    // parse the json object
    var obj = JSON.parse(json);
    for (var i = 0; i < obj.length; i++) {
        var row = "'Ferry load for date " + obj[i].CaptureDate +
            " for sailing time " + obj[i].sailingTime +
            " departing " + obj[i].Departing +
            " was " + obj[i].busy_quiet + " at " + obj[i].totalLoad +
            " percent, thanks.',";
        console.log(row);
        fs.appendFileSync('ferryfact4head.txt', row + '\n');
    }
    connection.end();
    // Output results to file
    //        console.log('The query-result is in temp.json');
    //        fs.writeFile('/home/alastair/source/alastairrough.github.com/output/Oct10.json',json)
    concat([
        'ferryfact4head.txt',
        'ferryfact4foot.txt'
    ], 'ferryfact4out.txt', function (err) {
        if (err) throw err
        console.log('done');
    });


});