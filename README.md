# bee_online_communication
 
## User Management System
This project is a User Management System that allows you to add, update, and delete users, storing the user data in a MongoDB database. The application is built using Node.js, Express.js, MongoDB, and Mongoose.

## Features
Add new users with information such as avatar, name, country, usage statistics, and payment method.
Update existing user information with a modal popup.
Delete users from the system.
Store user data in MongoDB using Mongoose.

## Technologies Used
Node.js: Backend runtime environment
Express.js: Web framework for Node.js
MongoDB: NoSQL database for storing user data
Mongoose: MongoDB object modeling tool for Node.js

## Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/user-management-system.git
cd user-management-system
Install the dependencies:

bash
Copy code
npm install
Set up MongoDB:

Make sure you have MongoDB installed and running on your local machine. If you're using a cloud-based MongoDB instance, update the connection string in your environment file.

Configure the environment variables:

Create a .env file at the root of your project and add your MongoDB connection string:

bash
Copy code
MONGO_URI=mongodb://localhost:27017/your-database-name
Run the application:

bash
Copy code
npm start
The server will start running on http://localhost:4000.

User Schema
The project uses the following Mongoose schema to store user data in MongoDB:

## sreeenShots
 










