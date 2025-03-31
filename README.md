Complete README file including instructions for setting up the project, running it on localhost, and adding images for context:

---

# BlogSphere

A blogging platform designed to allow users to create, view, comment on, and manage blogs. It features robust authentication and authorization, dynamic UI based on user roles, and support for image uploads.

---

## Prerequisites

Before setting up the project, ensure you have the following:
- **Node.js** (Download from [Node.js Official Website](https://nodejs.org/))
- **npm** (Comes pre-installed with Node.js)
- **MongoDB** (Local installation or connection to a MongoDB Atlas cluster)

---

## Installation and Setup

Follow these steps to get the project running on localhost:

### 1. **Clone the Repository**
Clone the project and navigate into its folder:
```bash
git clone <repository-url>
cd <repository-folder>
```

---

### 2. **Install Dependencies**
Install the required Node.js packages using npm:
```bash
npm install
```

---

### 3. **Environment Variables**
Your project includes a  file for configuration. Before running the project, ensure the following key is correctly set:

```env
PORT=8000
MONGO_URI=mongodb://localhost:27017/blogsphere
```

If using MongoDB Atlas, replace `mongodb://localhost:27017/blogsphere` with your Atlas connection string.

---

### 4. **Start MongoDB**
If you’re running MongoDB locally, start the server:
```bash
mongod
```

---

### 5. **Start the Application**
Run the project on localhost with the following command:
```bash
npm start
```

---

### 6. **Access the Application**
Open your browser and go to:
```
http://localhost:8000
```

---

## Key Features

- **User Authentication**:
  - Sign up, log in, and log out securely.
  - Role-based access (e.g., admin functionality).

- **CRUD Operations**:
  - Create, read, update, and delete blogs.
  - Add comments to blogs.

- **Image Uploads**:
  - Upload blog cover images dynamically.

---

## Project Structure

```plaintext
.
├── public/
│   ├── uploads/          # Folder for uploaded images
│   └── assets/           # Static assets (images, CSS, etc.)
├── views/
│   ├── home.ejs          # Home page
│   ├── addBlog.ejs       # Add new blog page
│   └── ...               # Other views
├── routes/
│   ├── blog.js           # Blog-related routes
│   ├── user.js           # User-related routes
├── models/
│   ├── blog.js           # Blog schema
│   ├── comment.js        # Comment schema
│   ├── user.js           # User schema
├── middleware/
│   ├── authentication.js # Middleware for token-based authentication
├── services/
│   ├── authentication.js # JWT token creation and validation
├── app.js                # Main application file
└── package.json          # Project dependencies
```

---



