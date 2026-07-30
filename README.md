# ♻️ Smart Waste Monitoring System

A MERN Stack-based Smart Waste Monitoring System designed to help Urban Local Bodies efficiently manage household waste collection, monitor segregation compliance, and reward responsible households through a digital platform.

---

## 📌 Overview

The Smart Waste Monitoring System digitizes waste collection and monitoring by enabling officers to record daily waste collection, verify segregation status, and automatically update reward and penalty points for households.

The system consists of:

- 🏠 Admin Portal
- 👮 Officer Portal
- ⚙️ Node.js + Express Backend
- 🍃 MongoDB Atlas Database

---

## 🚀 Features

### 👨‍💼 Admin Portal

- Dashboard with waste collection statistics
- Manage households
- Manage collection officers
- Generate QR Codes for households
- View reports
- Search households
- Add/Edit/Delete household details

### 👮 Officer Portal

- Officer Dashboard
- QR Code Scanner
- Search households
- Record waste collection
- Mark waste as:
  - Properly Segregated
  - Mixed Waste
- Automatically update:
  - Reward Points
  - Penalty Points
- Collection History

### ⚙️ Backend

- REST APIs using Express.js
- MongoDB Atlas Integration
- CRUD Operations
- Dashboard APIs
- Household Management APIs
- Officer Management APIs
- Collection Management APIs

---

# 🛠️ Tech Stack

## Frontend

- React.js
- Vite
- Axios
- CSS

## Backend

- Node.js
- Express.js

## Database

- MongoDB Atlas
- Mongoose

## Tools

- VS Code
- Git
- GitHub
- Postman

---

# 📂 Project Structure

```
SMART-WASTE-MONITORING-SYSTEM
│
├── ADMIN-CLIENT
│   ├── src
│   ├── public
│   └── package.json
│
├── OFFICER-CLIENT
│   ├── src
│   ├── public
│   └── package.json
│
├── BACKEND
│   ├── config
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/monnishaaa/smart-waste-monitoring-system.git

cd smart-waste-monitoring-system
```

---

## 2️⃣ Install Backend

```bash
cd BACKEND

npm install
```

---

## 3️⃣ Install Admin Client

```bash
cd ../ADMIN-CLIENT

npm install
```

---

## 4️⃣ Install Officer Client

```bash
cd ../OFFICER-CLIENT

npm install
```

---

# 🔑 Environment Variables

Create a `.env` file inside the **BACKEND** folder.

```
MONGO_URI=Your_MongoDB_Connection_String

PORT=5000
```

---

# ▶️ Run Backend

```bash
cd BACKEND

npm start
```

or

```bash
npm run dev
```

---

# ▶️ Run Admin Client

```bash
cd ADMIN-CLIENT

npm run dev
```

---

# ▶️ Run Officer Client

```bash
cd OFFICER-CLIENT

npm run dev
```

---

# 📸 Screenshots

## Admin Dashboard

<img width="1365" height="679" alt="image" src="https://github.com/user-attachments/assets/5d23fec5-14e0-4da3-8ebf-ba31ef96b1f3" />


```
README_IMAGES/admin-dashboard.png
```

---

## Household Management

<img width="1365" height="678" alt="image" src="https://github.com/user-attachments/assets/7cdb8336-aaeb-4ca0-9cf9-642da74673bb" />


```
README_IMAGES/households.png
```

---

## Officer Dashboard

<img width="1364" height="677" alt="image" src="https://github.com/user-attachments/assets/316f382f-f820-4da9-a319-07b5ee84a34a" />


```
README_IMAGES/officer-dashboard.png
```

---

## QR Scanner

<img width="1363" height="683" alt="image" src="https://github.com/user-attachments/assets/20bfd36b-8d4d-495c-a123-f449c161b1d7" />


```
README_IMAGES/qr-scanner.png
```

---

## Waste Collection

<img width="1365" height="635" alt="image" src="https://github.com/user-attachments/assets/88070242-116e-4e3e-afef-0c6e39a2f724" />


```
README_IMAGES/collection.png
```

---

## MongoDB Database

<img width="1365" height="721" alt="image" src="https://github.com/user-attachments/assets/609bb776-2268-428e-a69c-d90f2fac4ba0" />


```
README_IMAGES/mongodb.png
```

---

# 🔄 Workflow

```
Admin
   │
   ▼
Registers Households
   │
   ▼
Generates QR Codes
   │
   ▼
Officer Scans QR
   │
   ▼
Records Waste Collection
   │
   ▼
Backend API
   │
   ▼
MongoDB Updates
   │
   ▼
Reward / Penalty Points Updated
```

---

# 📈 Future Enhancements

- Mobile Application
- AI-based Waste Classification
- GPS Tracking
- Route Optimization
- SMS Notifications
- Analytics Dashboard
- Citizen Portal

---

# 👩‍💻 Author

**Monisha Pavendan**

B.E. Electronics and Communication Engineering

GitHub:
https://github.com/monnishaaa

---

# 📄 License

This project is developed for academic and educational purposes.
