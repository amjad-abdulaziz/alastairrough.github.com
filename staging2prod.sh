#!/bin/sh
# staging2prod.sh
# filepath = '/home/alastair/source/alastairrough.github.com'
# 1. update crontab for new schedule
# 2. create new table and view in MySQL
# 3. update the files below
# copy current production to staging
cp /home/alastair/source/runtime.secure/scrape305.js /home/alastair/source/runtime.staging/scrape305.js 
cp /home/alastair/source/alastairrough.github.com/git2.sh /home/alastair/source/runtime.staging/git2.sh 
cp /home/alastair/source/runtime.secure/mysql2Json2.js /home/alastair/source/runtime.staging/mysql2Json2.js 
cp /home/alastair/source/alastairrough.github.com/pivot.html /home/alastair/source/runtime.staging/pivot.html 
# update then copy new staging to production
cp /home/alastair/source/runtime.staging/scrape305.js /home/alastair/source/runtime.secure/scrape305.js
cp /home/alastair/source/runtime.staging/git2.sh /home/alastair/source/alastairrough.github.com/git2.sh
cp /home/alastair/source/runtime.staging/mysql2Json2.js /home/alastair/source/runtime.secure/mysql2Json2.js
cp /home/alastair/source/runtime.staging/pivot.html /home/alastair/source/alastairrough.github.com/pivot.html
# update sailingReport.html with new json data source 
nano /home/alastair/source/alastairrough.github.com/sailingReport.html
