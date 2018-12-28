// from http://www.netinstructions.com/simple-web-scraping-with-node-js-and-javascript/ //
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

request("https://www.reddit.com", function(error, response, body) {
  if(error) {
    console.log("Error: " + error);
  }
  console.log("Status code: " + response.statusCode);

  var $ = cheerio.load(body);
   
  $('div#siteTable > div.link').each(function( index ) {
    var title = $(this).find('p.title > a.title').text().trim();
    var score = $(this).find('div.score.unvoted').text().trim();
    var user = $(this).find('a.author').text().trim();
    var test = $(this).text().trim();
    console.log("Title: " + title);
    console.log("Score: " + score);
    console.log("User: " + user);
      console.log("test:" + test)
    fs.appendFileSync('reddit.txt', title + '\n' + score + '\n' + user + '\n');
  });

});