#!/bin/bash
# ftpscript.sh
HOST=lexington.atspace.cc  #This is the FTP servers host or IP address.
USER=2334232_at             #This is the FTP user that has access to the server.
PASS=*****          #This is the password for the FTP user.

# Call 1. Uses the ftp command with the -inv switches. 
#-i turns off interactive prompting. 
#-n Restrains FTP from attempting the auto-login feature. 
#-v enables verbose and progress. 

ftp -inv $HOST <<EOF
binary
quote user $USER 
quote pass $PASS

# Call 2. Here the login credentials are supplied by calling the variables.

# quote user $USER $PASS

# Call 3. Here you will change to the directory where you want to put or get
# cd /path/to/file

# Call4.  Here you will tell FTP to put or get the file.
put loads07-03-17.txt

# End FTP Connection
bye

EOF