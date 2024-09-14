# bee_online_communication
 
## User Management System
This project is a User Management System that allows you to add, update, and delete users, storing the user data in a MongoDB database. The application is built using Node.js, Express.js, MongoDB, and Mongoose.

## sreeenShots

![Screenshot 2024-09-14 at 7 10 41 PM](https://github.com/user-attachments/assets/da160a47-53d0-4868-a05e-12ee3e0b99be)



![Screenshot 2024-09-14 at 7 10 56 PM](https://github.com/user-attachments/assets/190dac62-4150-4ebb-820c-38c22470c86a)



![Screenshot 2024-09-14 at 7 11 28 PM](https://github.com/user-attachments/assets/8b6c398c-c2d5-40de-b74e-44fcd91d2448)



![Screenshot 2024-09-14 at 7 11 42 PM](https://github.com/user-attachments/assets/50aa7f08-b2ee-47e7-bfa9-f999b6aeb55a)

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






