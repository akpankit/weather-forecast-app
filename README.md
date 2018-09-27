
Assuming you are on mac below instructions will work.

#### Pre-requisite to run app
1) Install Git
2) Install docker for mac/windows
3) Install node.js
4) Install yarn

Please use brew as package manager tool on mac to install all the pre-requisites.

## Steps to set up 
Assuming you have all the pre-requisite installed and configured properly on your computer

1) Clone the app git repo
2) Navigate into the directory where git repo was cloned
3) Run command `docker ps` and Make sure docker is running and none of the containers is using port 80, if they are stop that container or change the port.
4) Run the command `make docker-start`


After successfully executing the steps run `docker ps` and make sure app containers are running. 

Navigate to `http://localhost` to check the app.
