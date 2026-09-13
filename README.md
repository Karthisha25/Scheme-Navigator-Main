# 🌐 Scheme Navigator

> A web-based application that helps users discover government schemes based on their personal details and eligibility criteria.

---

## ✨ Features

- 🔐 User Registration & Login
- 👤 User Authentication
- 🗂️ Government Scheme Filtering
- 🎯 Eligibility-Based Scheme Recommendations
- 🗄️ MongoDB Database Integration
- 💻 Simple and User-Friendly Interface

---

## 📸 Screenshots

### 🏠 Home Page
![Home Page]<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/600fec28-8cc2-4cc9-9266-701a062f78bb" />


### 🎯 Eligibility Selection
![Gender Selection]<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/41a93e07-627b-4a5b-9f34-0fa9158a3f6c" />


### 📋 Filtered Results
![Filtered Results]<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/2888b9c4-1544-424c-957f-9f41b60d8d37" />



## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML | Frontend Structure |
| CSS | Styling |
| JavaScript | Frontend Functionality |
| Node.js | Backend Runtime |
| Express.js | Backend Framework |
| MongoDB Atlas | Database |
| bcrypt | Password Hashing |
| dotenv | Environment Configuration |

---

## 🚀 How to Run This Project

### 1. Clone the Repository

    git clone https://github.com/Karthisha25/Scheme-Navigator-Main.git

### 2. Open the Project Folder

    cd Scheme-Navigator-Main

### 3. Install Dependencies

    npm install

### 4. Configure Environment Variables

Create a `.env` file in the project root and add:

    MONGO_URI=your_mongodb_connection_string

⚠️ Do not upload your `.env` file or expose your MongoDB credentials.

### 5. Start the Server

    node server.js

### 6. Open the Application

    http://localhost:3000

---

## 🗄️ Database

**Database:** `schemeNavigatorDB`

**Collections:**

- `USER_DETAILS`
- `SCHEMES`

---

## 🔄 How It Works

    User
      ↓
    Registration / Login
      ↓
    Enter Personal Details
      ↓
    System Filters Schemes
      ↓
    Eligible Government Schemes
      ↓
    Display Results

---

## 📁 Project Structure

    Scheme-Navigator-Main/
    │
    ├── server.js
    ├── package.json
    ├── package-lock.json
    ├── README.md
    │
    ├── login.html
    ├── registration.html
    ├── result.html
    ├── age.html
    ├── caste.html
    ├── education.html
    ├── gender.html
    ├── income.html
    ├── maritalstatus.html
    ├── residence.html
    └── coverpage.html

---

## 👩‍💻 Author

**Karthisha Veeramachaneni**

⭐ If you find this project useful, consider giving it a star!
