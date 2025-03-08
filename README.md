### 🚀 **RouteEase - Frontend Authentication System (Without Database)**  

This is a simple frontend-based authentication system using **HTML, CSS, and JavaScript**. It provides **Signup, Login, Logout, and Contact Us functionalities** without a backend or database. All data is stored in `localStorage`.  

---

## 📌 **Features**
✅ User Signup & Login (Stores credentials in `localStorage`)  
✅ Redirects users after successful Signup/Login  
✅ Navbar dynamically updates after login (Shows "Welcome, Username" instead of Login/Signup)  
✅ Logout button removes user session  
✅ Toast notifications for actions (Signup, Login, Logout, Invalid Credentials)  
✅ Contact form submission with a **thank-you message & smooth animation**  

---

## 🏗️ **Project Structure**
```
/RouteEase
│── index.html          # Home Page
│── signup.html         # Signup Page
│── login.html          # Login Page
│── contact.html        # Contact Us Page
│── about.html          # About Us Page
│── styles.css          # Main CSS File
│── app.js              # JavaScript Functionality
│── assets/             # Images, Icons, Fonts, etc.
└── README.md           # Project Documentation
```

---

## 🔧 **Installation & Setup**
1️⃣ Clone the repository:
```sh
git clone https://github.com/your-username/RouteEase.git
```
2️⃣ Open the project folder:
```sh
cd RouteEase
```
3️⃣ Run the project by opening `index.html` in a browser.

---

## 🎯 **Usage Guide**

### ✨ **User Authentication**
- **Signup:** Enter a username & password → Click "Signup" → Redirects to Home Page with a success message.  
- **Login:** Enter the same credentials used in Signup → Click "Login" → Redirects to Home Page.  
- **Logout:** Click the Logout button → Session is cleared → Page refreshes to show Login/Signup again.  

### 📩 **Contact Form**
- Fill in the contact form → Click "Submit" → A **Thank You message appears** & the form disappears.

---

## 🔥 **Key JavaScript Functions**
### **1️⃣ Signup Function**
```js
const signupForm = document.getElementById("signup-form");
signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;

    if (username && password) {
        localStorage.setItem("user", JSON.stringify({ username, password }));
        localStorage.setItem("loggedInUser", username);
        showToast("Signup Successful!", "success");
        setTimeout(() => (window.location.href = "index.html"), 2000);
    }
});
```

### **2️⃣ Login Function**
```js
const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.username === username && storedUser.password === password) {
        localStorage.setItem("loggedInUser", username);
        showToast("Login Successful!", "success");
        setTimeout(() => (window.location.href = "index.html"), 2000);
    } else {
        showToast("Invalid Credentials!", "error");
    }
});
```

### **3️⃣ Navbar Update Based on Login Status**
```js
function checkUserStatus() {
    const loggedInUser = localStorage.getItem("loggedInUser");
    const navLinks = document.getElementById("nav-links");

    if (loggedInUser) {
        navLinks.innerHTML = `
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="contact.html">Contact Us</a></li>
            <li class="user-info"><i class="fas fa-user"></i> Welcome, ${loggedInUser}</li>
            <li><button id="logout-btn" class="btn">Logout</button></li>
        `;

        document.getElementById("logout-btn").addEventListener("click", () => {
            localStorage.removeItem("loggedInUser");
            showToast("Logged Out Successfully!", "info");
            setTimeout(() => window.location.reload(), 2000);
        });
    }
}
```

### **4️⃣ Toast Notification Function**
```js
function showToast(message, type) {
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}
```

---

## 🎨 **Screenshots**
### 🏠 Home Page (After Login)
![Home Page](https://your-image-url.com/home.png)

### 🔐 Signup Page
![Signup Page](https://your-image-url.com/signup.png)

### 🔑 Login Page
![Login Page](https://your-image-url.com/login.png)

---

## 🚀 **Future Enhancements**
✔ Add password encryption for better security  
✔ Use **SessionStorage** instead of `localStorage` for temporary login sessions  
✔ Integrate with a **backend (Node.js, Django, or Firebase)** for real authentication  

---

## 🤝 **Contributing**
Want to improve this project? Feel free to contribute!  
1️⃣ **Fork the repo**  
2️⃣ **Create a new branch** (`feature/new-feature`)  
3️⃣ **Commit your changes**  
4️⃣ **Push and create a PR**  

---

## 📄 **License**
This project is licensed under the MIT License. Feel free to use & modify it.

---

### 📩 **Need Help?**
For any issues, feel free to reach out or open an **issue** in this repo! 🚀  

##  **🚀Screenshots**

## 🏠 Home Page
![image](https://github.com/user-attachments/assets/e8b60be9-4548-4114-ac79-6dbe9aa55f62)
## ℹ️ About Us Page
![image](https://github.com/user-attachments/assets/fa56504a-c352-453c-8f6f-4b729015200c)
## 🔐 Signup Page
![image](https://github.com/user-attachments/assets/f1db4eb4-2c7c-44a7-92a4-c3f45ba26131)
## 🔑 Login Page
![image](https://github.com/user-attachments/assets/36bd3205-bcdd-468d-9b4e-71d7c3e449d6)
## 📩 Contact Us Page
![image](https://github.com/user-attachments/assets/fe8e7262-9de6-416f-ae4b-e44077927cf4)




