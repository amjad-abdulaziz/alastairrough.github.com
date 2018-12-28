alastairrough.github.com  
========================
Outline function:
1. Mash-up from the ferry site is at http://alastairrough.github.io/sunshine.html. My pivot table of load % in an iframe at the foot of the page. 
2. Working repo https://github.com/alastairrough/alastairrough.github.com. 
3. The web site scraper is https://github.com/alastairrough/alastairrough.github.com/blob/master/scrape305.js written for node.js.
4. The scraper writes to local instance of MySql from which is exported the json data file https://github.com/alastairrough/alastairrough.github.com/blob/master/output/Apr7.json . This local host also runs all the cron jobs on a fixed schedule.
5. The json data file is rendered using a Google pivot table at https://github.com/alastairrough/alastairrough.github.com/blob/master/pivot.html that is used in the iframe at (1) above.
1. Limitations of this implementation:

   a. The data quality degrades when the actual ferries are running late. Because the cron jobs do not adapt to the ferry delays, the values of %load are captured before each ferry sailing has completed its loading. 
