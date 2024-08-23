<<<<<<< HEAD
# website_1
=======

# AI Solutions

This repository contains a sample project for an AI-driven solutions website. The project includes both a frontend built with React and a backend built with Node.js and Express, connected to a MongoDB database.

## Project Structure

- **backend/**: Contains the Node.js/Express backend.
- **frontend/**: Contains the React frontend.
- **public/**: Contains the public assets for the frontend.
- **src/**: Contains the source code for the React frontend.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [Git](https://git-scm.com/)
- [MongoDB](https://www.mongodb.com/try/download/community) (can be local or a cloud version like MongoDB Atlas)

### Steps

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd your-repo
   ```

3. **Install Backend Dependencies:**

   ```bash
   cd backend
   npm install
   ```

4. **Install Frontend Dependencies:**

   ```bash
   cd ../frontend
   npm install
   ```

5. **Set up Environment Variables:**

   - Create a `.env` file in the `backend` directory with the following content:

     ```
     MONGO_URI=your_mongo_connection_string
     ```

6. **Run the Backend:**

   ```bash
   cd backend
   npm start
   ```

7. **Run the Frontend:**

   ```bash
   cd ../frontend
   npm start
   ```

8. **Open the Application:**

   - The frontend should be running at `http://localhost:3000` and the backend API at `http://localhost:5000`.

## Deployment

### Docker

To deploy the application using Docker:

1. **Build and Run the Containers:**

   ```bash
   docker-compose up --build
   ```

2. **Access the Application:**

   - The frontend will be available at `http://localhost:3000`.
   - The backend API will be available at `http://localhost:5000`.

## License

This project is licensed under the MIT License.
>>>>>>> a9cf827 (Initial commit)
