# Employee Task Manager

This is a web application built using the following technologies:

<p align="center">
  <img src="https://img.icons8.com/color/48/000000/nodejs.png"/>
  <img src="https://img.icons8.com/color/48/000000/express.png"/>
  <img src="https://img.icons8.com/color/48/000000/postgreesql.png"/>
  <img src="https://img.icons8.com/color/48/000000/npm.png"/>
</p>

## DATABASE SCHEMA

![Database Schema](https://cdn.discordapp.com/attachments/785457882073923585/1093125272229908582/drawSQL-trello-export-2023-04-05.png)
## Prerequisites

Before running this application, you will need to have the following software installed on your system:

- Node.js (v10 or later)
- PostgreSQL (v10 or later)

## Installation

To install the dependencies for this project, run the following command in your terminal:

``npm install``






## Configuration

To configure the application, you will need to create a `.env` file in the root directory of the project. This file should contain the following environment variables:

- 'DB_URL': the connectionString url for your PostgreSQL database

## Running the application

To start the application, run the following command in your terminal:

``npm start``


This will start the server on port 3000 by default. You can then access the application by navigating to `http://localhost:3000` in your web browser.

## Usage

To add a new employee, click the "Add Employee" button on the home page. This will take you to a form where you can enter the employee's name, position, and email address. Click the "Add" button to save the employee to the database.

To add a new task, click the "Add Task" button on the home page. This will take you to a form where you can enter the task's name, description, and assign it to an employee. Select the employee from the dropdown list and click the "Add" button to save the task to the database.

To view all employees and their assigned tasks, click the "View Employees" button on the home page. This will display a table with each employee's name, position, email address, and the tasks assigned to them.

## Team 

- [Ahmed Izz Murtaja]()
- [Mohammed Mohani]()

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
