#!/bin/sh
# git2.sh
# filepath = '/home/alastair/source/alastairrough.github.com'
# export json data file
nodejs /home/alastair/source/runtime.secure/mysql2Json2.js
# export today's sailing report
sh  /home/alastair/source/runtime.secure/sailingReport.sh
cp  /home/alastair/source/runtime.secure/sailingReport.html /home/alastair/source/alastairrough.github.com/
# read -p "commit using script:" desc
#git add .
cd /home/alastair/source/alastairrough.github.com
git add output/Jan2.json
git add /home/alastair/source/alastairrough.github.com/sailingReport.html
#git commit -m $desc
git commit -m output/Jan2.json
#git commit /home/alastair/source/alastairrough.github.com/sailingReport.html
git push origin master
