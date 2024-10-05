# Node.js Express Application Setup

This README provides a step-by-step guide to setting up a Node.js environment and creating a simple Express application with EJS as the template engine.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Setting Up the Project](#setting-up-the-project)
- [Installing Dependencies](#installing-dependencies)
- [Running the Application](#running-the-application)
- [Using Nodemon](#using-nodemon)
- [Conclusion](#conclusion)

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/download/) (version 14.x or later)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js)

You can verify the installation by running:
node -v
npm -v
## Setting Up the Project
Create a New Directory:

Open your terminal and create a new directory for your project:
mkdir my-express-app
cd my-express-app
Initialize npm:

Run the following command to create a package.json file:
npm init -y
The -y flag initializes the project with default settings.

## Installing Dependencies
Install Express and EJS:

Install the required dependencies for your application using npm:
npm install express ejs
(Optional) Install Nodemon:
npm install --save-dev nodemon

## Running the Application
node scripts.js
You should see the message Server is running on port 3000. Open your browser and go to http://localhost:3000 to view your application.

## Using Nodemon
npx nodemon scripts.js
or 
nodemon scripts.js
Now, any changes you make to your files will automatically restart the server.

## Conclusion
Congratulations! You have successfully set up a Node.js environment with Express and EJS. You can now build upon this foundation to create more complex web applications. If you encounter any issues, feel free to check the official documentation or seek help from the community.

Happy coding!
