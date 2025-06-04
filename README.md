# etherscan


This project consists of a frontend and backend setup for interacting with the SIM-DUNE-API. Below are the instructions to set up and run the project.

# Prerequisites

- **Node.js**: Ensure you have Node.js version `v22.16.0` installed.

# Project Setup

The project is divided into two main directories:
- `client`: Contains the frontend code.
- `server`: Contains the backend code.

> **Note**: The `node_modules` directories for both `client` and `server` are included in the repository, so you may not need to run `npm install`. However, if you encounter issues, install dependencies as described below.

### Installing Dependencies (if needed)

If the included `node_modules` are not working:
1. Navigate to the `client` directory:
  
   cd client
   npm install

2. Navigate to the `server` directory:
 
   cd server
   npm install
   

## Running the Project

### Starting the Frontend
1. Navigate to the `client` directory:
  
   cd client
  
2. Start the frontend:
 
   npm run start
 

### Starting the Backend
1. Navigate to the `server` directory:
  
   cd server

2. Start the backend:

   node index.js
  

### Verifying Backend
- The backend runs on port `5000` by default.
- If the backend is not running on port `5000`, update the port in the frontend's `.env` file located in the `client` directory.

## API Key Configuration
- The API keys for both frontend and backend are already configured in their respective `.env` files.
- Ensure the API keys are valid and correctly set up in the `.env` files if you encounter issues with API requests.

## UI Folder 
This folder has working UI screenshot


