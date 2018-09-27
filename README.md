
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

Screenshots:

![Alt text](https://user-images.githubusercontent.com/11822779/46164299-a45a6480-c25b-11e8-93dd-4c76a1bac107.png)

![Alt text](https://user-images.githubusercontent.com/11822779/46164303-a7555500-c25b-11e8-9ee0-0f98570fc17d.png)

![Alt text](https://user-images.githubusercontent.com/11822779/46164307-a8868200-c25b-11e8-943c-c0d0021b0d31.png)
