Scheme Navigator

Scheme Navigator is a web-based application that helps users find government schemes based on their personal details and eligibility criteria.

Features
User registration and login
User authentication
MongoDB database integration
Filter government schemes based on user details
Simple and user-friendly web interface
Dynamic scheme results
Technologies Used
Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express.js
Database: MongoDB Atlas
Authentication: bcrypt
Environment Variables: dotenv
How to Run This Project
Clone the repository:

git clone https://github.com/Karthisha25/Scheme-Navigator-Main.git

Move into the project folder:

cd Scheme-Navigator-Main

Install the dependencies:

npm install

Create a .env file in the project folder and add your MongoDB connection string:

MONGO_URI=your_mongodb_connection_string

Do not upload the .env file to GitHub.

Start the application:

node server.js

Open the application in your browser:

http://localhost:3000

Database

This project uses MongoDB Atlas.

Database name: schemeNavigatorDB

Collections:

USER_DETAILS
SCHEMES
Project Structure

The project contains the frontend HTML pages, CSS and JavaScript files, along with the Node.js backend server and MongoDB integration.

Author

Karthisha Veeramachaneni
