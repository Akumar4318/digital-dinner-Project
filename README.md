# 🍽️ The Digital Diner

A full-stack restaurant ordering system prototype that allows users to browse the menu, add items to their cart, and place pickup orders online. Built with the **MERN stack**, this project is designed to demonstrate a clean, functional approach to managing restaurant operations without overwhelming complexity.

**Frontend Live Demo:**  
🔗 [https://digitaldinnerstar.netlify.app/]

---

## 📌 Project Overview

**The Digital Diner** provides:

- A dynamic menu browsing experience
- Cart management
- Order placement with basic contact info
- Order history lookup by phone number
- Responsive UI using Tailwind CSS

---

## 🛠️ Tech Stack

| Layer         | Technology                |
|--------------|---------------------------|
| Frontend     | React, Tailwind CSS       |
| State Mgmt   |   Reducx toolkit          |
| Backend      | Node.js, Express          |
| Database     | MongoDB , PostgreSQL      |
| Deployment   | Netlify (Frontend)        |
               | Render (Backend,PostgreSQL)|

---

## 🧠 Why MongoDB over PostgreSQL?

### ✅ Flexibility for Menu Data
Menu items often contain semi-structured or optional fields such as:
- `imageUrl`, `tags`, `description`, `customizations`, etc.

MongoDB allows schema-less flexibility, making it ideal for dynamic and evolving menu structures without enforcing rigid rules.

### ✅ Developer Speed & Simplicity
MongoDB enables rapid development, especially in early-stage projects or prototypes. With Mongoose, validation and modeling become easier without setting up extensive schemas or dealing with complex joins.

### ✅ Natural Fit for Orders
Order objects contain arrays of items, total amount, and customer contact info. This structure is perfectly suited for MongoDB’s nested document model, which makes retrieval and storage more efficient without needing relational mapping.

### ✅ Future-Ready for Scalability
MongoDB scales horizontally and is a great fit for modern, high-speed web applications where read-heavy workloads (like fetching menus/orders) are common.

---

## ⚙️ Setup Instructions

### 🧪 Prerequisites

- Node.js & npm
- MongoDB installed locally or use MongoDB Atlas
- Git

---

### 🔧 Backend Setup


git clone https://github.com/kaushalkrsna1602/digital-diner-kaushal
cd digital-diner-kausahl/backend
npm install

Create .env file in /backend with:
PORT=5000
MONGO_URI="mongodb+srv://kaushalkrkr:9QVMeRTF45aPhdwK@cluster0.vuu6w.mongodb.net/digitalDiner?retryWrites=true&w=majority&appName=Cluster0"

Start Server : npm run dev


### 🔧 Frontend Setup

cd digital-diner-kaushal/frontend
npm install
npm run dev 

📦digital-diner-kaushal
 ┣ 📂frontend           # React Frontend
 ┃ ┣ 📂src
 ┃   ┣ 📂components     # UI Components & Pages
 ┃   ┣ 📂 store       # Cart Context & Config
 ┃   ┗ App.jsx
 ┃   ┣ 📂Slice
 ┃  ┣ 📂 Services
 ┃     ┣ 📂 Operations
 ┃      ┣ apiCooonector.js
 ┃      ┣ apis.js
       
       
 ┣ 📂backend           # Express + MongoDB Backend
 ┃   ┣ 📂controllers
 ┃   ┣ 📂models         # Mongoose Schemas
 ┃   ┣ 📂Database
 ┃   ┣ 📂routes         # API Route Handlers
 ┃   ┣ index.js        # Express App Entry Point
 ┃   ┗ config.js        # DB Connection
 ┣ README.md


Q:- ● Any assumptions made or challenges faced

One major challenge I faced was understanding PostgreSQL, as it was my first time using it in a project. Designing the schema according to the project requirements took some time. The biggest hurdle, however, was deploying the PostgreSQL database on Render and successfully fetching data from it.


📡 API Endpoints

🗂️ Category Routes

POST /createcategory — Create a new category

GET /getallcategory — Retrieve all categories

🍽️ Item Routes

POST /createitem — Create a new item

GET /items — Get all items

GET /items/category/:categoryId — Get items by category ID

🛒 Order Routes

POST /orders — Create a new order

GET /orders/:phone — Get orders by phone number

Author : 

Abhishek kumar

Internship Assessment Submission for Eatoes
