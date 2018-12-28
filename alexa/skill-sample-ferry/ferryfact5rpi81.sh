#!
# on rpi81
# this script generates a dynamic lambda file for Alexa Skill "ferry status"
# file: ferryfact5rpi81.sh
# based on file: ferryfact5.sh
# run script on rpi81 in cron as root at time sailing time + 5 min
# generate index.js
cd  /home/alastair/source/runtime.secure
nodejs /home/alastair/source/runtime.secure/ferryfact5.js

# copy to repo
# cp index.js index.$(date +"%Y%m%d_%H%M%S").js
cp index.js /home/alastair/source/alastairrough.github.com/alexa/skill-sample-ferry/index.js 

# git push as root
cd /home/alastair/source/alastairrough.github.com/
git pull
git add .
git commit -m 'updating index.js'
git push

# on rpi68
# file: ferryfact5rpi68.sh
# based on file: ferryfact5.sh
# run script on rpi68 in cron as root at time sailing time + 10 min
# pull from github to ferry skill folder
#cd /home/alastair/source/alastairrough.github.com
#git pull 
#cp /home/alastair/source/alastairrough.github.com/alexa/skill-sample-ferry/index.js  /home/alastair/Desktop/skill-sample-ferry/skill-sample-nodejs-fact/lambda/custom/index.js 
#cd /home/alastair/Desktop/skill-sample-ferry/skill-sample-nodejs-fact

# deploy the lambda changes
#ask deploy -p profile_2 -t lambda
