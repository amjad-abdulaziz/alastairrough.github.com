# Alexa Skill "ferry fact"
Updates the Alexa skill "ferry fact" with current schedule and status for ferry service between Langdale and Horseshoe Bay.
## Design:
1. Read updated data from MySQL database for ferry sailings updated for website http://alastairrough.github.io/sunshine.html
1. Create a digest of current status e.g. is the fery busy today? when is the next sailing? is the ferry on time?
1. Initial implementation use the table data from http://alastairrough.github.io/sailingReport.html from sailingReport.sh
1. Update the entry in Alexa's /skill-sample-ferry/skill-sample-nodejs-fact/lambda/custom/index.js
1. Re-deploy skill to Amazon Lambda service "ask deploy"