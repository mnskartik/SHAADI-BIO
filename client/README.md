# 💍 ShaadiBio – Marriage Biodata Generator

ShaadiBio is a modern web application that helps users create, customize, and download professional marriage biodata templates in minutes.  
It provides a clean interface, live preview, customizable templates, and Firebase-powered authentication and storage.

---

## 🚀 Features

- 🔐 **User Authentication** (Firebase Email/Password)
- 🧾 **Create Marriage Biodata**
- 📝 **Edit Existing Biodata**
- 🗑 **Delete Biodata**
- 📄 **Download Biodata as PDF**
- 🎨 **Template Customization**
  - Change colors
  - Change fonts
- 👀 **Live Biodata Preview**
- 📊 **Dashboard to Manage Biodatas**
- 📱 **Responsive Design**
- 🔒 **Protected Routes**
- 🍔 **Mobile Hamburger Navigation**

---

## 🖥 Demo Workflow

1. Register/Login
2. Go to Dashboard
3. Create Biodata
4. Customize template
5. Preview biodata
6. Save biodata
7. Download as PDF
8. Edit or delete later from Dashboard

---

## 🛠 Tech Stack

### Frontend
- React
- React Router
- CSS3

### Backend / Database
- Firebase Authentication
- Firebase Firestore

### Libraries
- html2canvas
- jsPDF
- React Icons

---

## 📂 Project Structure
shaadi/
│
├── client
│
├── src
│ ├── components
│ │ ├── Navbar.jsx
│ │ └── ProtectedRoute.jsx
│ │
│ ├── pages
│ │ ├── Login.jsx
│ │ ├── Register.jsx
│ │ ├── Dashboard.jsx
│ │ └── CreateBiodata.jsx
│ │
│ ├── templates
│ │ ├── ClassicTemplate.jsx
│ │ └── ModernTemplate.jsx
│ │
│ ├── styles
│ │ ├── Auth.css
│ │ ├── BiodataForm.css
│ │ ├── Dashboard.css
│ │ └── Navbar.css
│ │
│ ├── firebase.js
│ ├── App.js
│ └── index.js

---

## ⚙ Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/shaadibio.git
2️⃣ Navigate to project
cd shaadibio/client
3️⃣ Install dependencies
npm install
4️⃣ Start development server
npm start
🔑 Firebase Setup

Create a Firebase project

Enable Authentication → Email/Password

Enable Firestore Database

Add your Firebase config inside:

src/firebase.js

Example:

const firebaseConfig = {
apiKey: "YOUR_API_KEY",
authDomain: "YOUR_PROJECT.firebaseapp.com",
projectId: "YOUR_PROJECT_ID",
storageBucket: "YOUR_PROJECT.appspot.com",
messagingSenderId: "XXXX",
appId: "XXXX"
};
📱 Responsive Design

The application is fully responsive and supports:

Desktop

Tablet

Mobile devices

🔒 Authentication Flow

Protected pages include:

Dashboard

Create Biodata

Edit Biodata

Users must be logged in to access them.

📌 Future Improvements

Public shareable biodata links

Multiple biodata templates

Profile photo storage in Firebase Storage

Search & filter in dashboard

Export biodata as DOCX

Template marketplace

👨‍💻 Author

Developed by Kartik
