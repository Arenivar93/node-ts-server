# Node.js and TypeScript Application - People Management

This is a simple Node.js application written in TypeScript that allows you to manage a list of people. You can add new people, view the list of people, add a date to each person, filter the list by active status, and sort the list based on specific properties. The application exposes a set of RESTful API endpoints to perform these actions.

## Features

- Add a new person to the list.
- List all people.
- Add a date to each person.
- Filter people by active status.
- Sort the people list by various properties (e.g., Name, Favorite Food, Favorite Movie, Status, Date).
- Reset the data to the initial state.

## Requirements

- Node.js 16 or higher
- TypeScript installed

## Installation

1. Clone the repository:
    git clone git@github.com:Arenivar93/node-ts-server.git


2. Navigate into the project directory:
    cd <project-directory>


3. Install dependencies:
    npm install

4. Copy the .env-example file to create your .env file:
    cp .env-example .env
    Open the .env file and set the PORT variable:
    PORT=3001

5. Run the application in development mode:
    npm run start
    This will start the application, and it will be available at http://localhost:3001.
