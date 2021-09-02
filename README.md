# Workforce Management App 

## Requirements

| Technology | details |
| ------ | ------ |
| Java | https://www.guru99.com/install-java.html
| Node | https://nodejs.org/en/download/
| VS Code | https://code.visualstudio.com/download
| Git | https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
| InteliiJ IDEA (Community Edition)| https://www.jetbrains.com/idea/download/#section=windows
| Json Formatter extension| https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en

## Getting started

- Clone the repository down to your local machine
 ```ssh
git clone git@github.com:2i-Git/workforce_planning_app.git 
cd workforce_planning_app
```

### Backend

- Right click on "server" folder and select "Open with Code" or different text exitor
- Open a new terminal and run the command nodemon server.js

### Frontend

- API Key for people HR will need to be granted, allowing users IP address to access data
- Username and Password for MongoDB will need to be added in
- Right click on "client" folder and select "Open with Code" or different text exitor
- open terminal and execute:
```ssh
npm install
```
if required: 
``` ssh
npm audit fix
```
and
``` ssh
npm start
```
The system will recognise the server is currently running on port 3000 and ask "Something is already running on port 3000. Would you like to run the app on another port instead? (Y/n)" Enter 'Y' and enter.
- In browser, navigate to [http://localhost:3001/](http://localhost:3000/) to use the app
