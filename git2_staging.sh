#!/bin/sh
# git2.sh
# filepath = '/home/alastair/source/alastairrough.github.com'
nodejs /home/alastair/source/runtime.secure/mysql2Json2.js
# read -p "commit using script:" desc
#git add .
cd /home/alastair/source/alastairrough.github.com
git add output/May18.json
#git commit -m $desc
git commit -m output/May18.json
git push origin master
 
