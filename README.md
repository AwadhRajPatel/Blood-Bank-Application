Introduction
The Blood Bank Application is designed to manage blood donation and transfusion 
processes efficiently. Built using the MERN stack (MongoDB, Express.js, React.js, Node.js

Features:
User Authentication (Login/Register)
Donor and Patient Management
Blood Inventory Management
Search and Filter Blood Units
Request and Approve Blood Transfusion
Notifications and Alerts

Technologies Used:

MongoDB: Database
Express.js: Backend Framework
React.js: Frontend Library
Mongoose: ODM for MongoDB
Redux: State Management
JWT: Authentication
Bootstrap: Styling

User:
POST /api/users/register - Register a new user
POST /api/users/login - Login a user

Donor:
GET /api/donors - Get all donors
POST /api/donors - Add a new donor

Request:
POST /api/requests - Request blood
GET /api/requests - Get all blood requests

Blood:
GET /api/blood - Get all blood units
POST /api/blood - Add a new blood unit
