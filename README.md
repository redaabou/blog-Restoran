# ✍️ Restoran Blog Platform

**🚀 A modern blogging platform refactored with Redux Toolkit for optimal state management**

## 📚 Table of Contents
- [🖼️ App Screenshots](#-app-screenshots)
- [🚀 Features](#-features)
- [🛠 Tech Stack](#-tech-stack)
- [📦 Installation](#-installation)
- [📝 License](#-license)

## 🖼️ App Screenshots

Here are the key screens of the Restoran Blog application:

- **Home Page**: Displays latest blog posts
    ![Home Page](/public/home-page.png)

- **All Recipes**: Browse complete recipe collection
    ![All Recipes](/public/all-recipes.png)

- **Add Blog Post**: Admin interface for new content
    ![Add Blog](/public/add-blog.png)

- **About Page**: Learn about Restoran's story
    ![About Page](/public/about-page.png)

## 🚀 Features

### 👨‍💼 Admin Portal
- **Post Management**: Create/Edit/Delete articles
- **Secure Authentication**: JWT protected routes
- **Rich Text Editing**: Intuitive content creation

### 👥 Public Features
- **Pagination**: Browse articles efficiently
- **Search Functionality**: Find relevant content
- **Responsive Design**: Mobile-friendly reading

## 🛠 Tech Stack

| Component       | Technology               |
|-----------------|--------------------------|
| Frontend        | React 18                 |
| State Management| Redux Toolkit            |
| Routing         | React Router v6          |
| Authentication  | JWT, Bcrypt             |
| Styling         | CSS Modules             |

## 📦 Installation

### Prerequisites
- Node.js v16+
- MongoDB connection string

### Setup
```bash
# Clone repository
git clone https://github.com/yourusername/restoran-blog.git
cd restoran-blog

# Install dependencies
npm install

# Configure environment
cp .env.example .env

# Start development server
npm start

#Run server database
npm run server
``` 