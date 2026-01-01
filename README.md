# 🏠 PrimeHomes

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![HTML5](https://img.shields.io/badge/-HTML5-%23E34F26?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/-JavaScript-%23F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)



**PrimeHomes** is a responsive Client-Side Web Application (SPA) designed to simulate a modern real estate platform. Built with React JS, this application allows users to search for properties, view detailed specifications, and manage a "Favorites" list using interactive drag-and-drop functionality.

[cite_start]This project was developed for the **5COSC026W Advanced Client-Side Web Development** module[cite: 3].

---

## 🔗 Live Demo
🚀 **[View the Deployed Application Here](INSERT_YOUR_DEPLOYED_URL_HERE)**

---

## 📸 Screenshots
| Desktop Search | Property Details | Mobile View |
|:---:|:---:|:---:|
| ![Search UI](public/images/Readme1.png) | ![Details UI](public/images/Readme2.png) | ![Mobile UI](public/images/Readme3.png) |

---

## ✨ Key Features

### 🔍 Advanced Property Search
[cite_start]Users can filter the JSON dataset of **7 properties** [cite: 66] [cite_start]using multiple simultaneous criteria[cite: 39]:
* [cite_start]**Type:** House, Flat, or Any[cite: 25].
* [cite_start]**Price:** Minimum and Maximum price ranges[cite: 26].
* [cite_start]**Bedrooms:** Minimum and Maximum bedroom counts[cite: 27].
* [cite_start]**Date Added:** Search by specific dates or date ranges[cite: 28].
* [cite_start]**Postcode:** Filter by area code (e.g., BR1, NW1)[cite: 28].
* [cite_start]*Powered by React UI Widgets for enhanced consistency and accessibility*[cite: 29].

### 🏡 Property Details & Gallery
* [cite_start]**Dynamic Routing:** Each result links to a dedicated property page[cite: 41].
* [cite_start]**Image Gallery:** Custom implementation allowing users to view a large main image and browse 6-8 thumbnail images[cite: 43, 44].
* [cite_start]**Tabbed Information:** Uses React Tabs to organize the Long Description, Floor Plan, and Google Map integrations[cite: 45].

### ⭐ Interactive Favorites Manager
[cite_start]A robust system to manage saved properties[cite: 46, 48]:
* **Drag-and-Drop:** Drag properties directly into the favorites sidebar.
* **Click-to-Save:** "Heart" icon buttons for accessibility.
* **Management:** Remove items by dragging them out or clicking delete. Clear all favorites instantly.
* [cite_start]**Persistency:** The Favorites list is displayed on the main Search Page[cite: 50].

### 📱 Responsive Design
* [cite_start]Fully responsive layout utilizing **CSS Grid** and **Flexbox**[cite: 51].
* [cite_start]Optimized for both Large Screens and Tablet/Mobile (< iPad Landscape)[cite: 52].

---

## 🛠️ Technical Implementation

### Tech Stack
* [cite_start]**Frontend Library:** React JS (Create React App)[cite: 29].
* [cite_start]**Styling:** Custom CSS with hand-written media queries (No templates used)[cite: 67].
* [cite_start]**Data Source:** Local JSON file containing 7 diverse property listings (No server-side database)[cite: 31, 34].
* [cite_start]**Testing:** JEST Framework[cite: 64].

### [cite_start]Security Measures [cite: 59]
* **CSP (Content Security Policy):** Implemented to prevent XSS attacks.
* **Sanitization:** HTML encoding ensures protection against injection vulnerabilities.

---

## 🚀 Getting Started

To run this project locally on your machine:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/](https://github.com/)[YOUR_USERNAME]/PrimeHomes.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd PrimeHomes
    ```
3.  **Install dependencies:**
    *(Note: The `node_modules` folder is excluded from this repo to save space [cite: 3])*
    ```bash
    npm install
    ```
4.  **Run the application:**
    ```bash
    npm start
    ```
    Open [Sanara-Perera.github.io/PrimeHomes](https://Sanara-Perera.github.io/PrimeHomes) to view it in the browser.

---

## 🧪 Testing

[cite_start]This project includes **5 meaningful tests** covering critical logic using the **JEST** framework[cite: 64, 171].

To run the test suite:
```bash
npm test
