# Twitch Clone

This project is a Twitch clone application built using NestJS for the backend and Next.js for the frontend. It aims to replicate some of the core functionalities of Twitch, including live streaming, user authentication, and real-time chat.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Running the Application](#running-the-application)
- [Contributing](#contributing)
- [License](#license)

## Features

- User Authentication
- Live Streaming
- Real-Time Chat
- User Profiles
- Stream Discovery

## Technologies

- **Backend**: NestJS
- **Frontend**: Next.js
- **Database**: PostgreSQL
- **Real-Time Communication**: WebSockets

## Installation

Before you begin, ensure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd stream-backend
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Configure your database connection in `src/config/configuration.ts`.

4. Run the database migrations:
   ```bash
   npm run typeorm:migration:run
   ```

5. Start the NestJS server:
   ```bash
   npm run start:dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd stream-frontend
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the Next.js development server:
   ```bash
   npm run dev
   ```

## Running the Application

- The backend server will run on `http://localhost:3000`.
- The frontend server will run on `http://localhost:3000`.

Visit `http://localhost:3000` to view the application in your browser.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any features, bug fixes, or enhancements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.