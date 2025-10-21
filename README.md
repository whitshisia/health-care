# 🩺 Health-Care

> A modern health-focused web application built with **React**, **Vite**, and **Firebase** — featuring **passwordless authentication**, a **responsive UI**, and full **PWA (Progressive Web App)** support.

---

## 🌟 Overview

**Health Tap Away** allows users to securely sign in using a passwordless email link and access health-related tools and features anytime, anywhere — even offline.
It’s lightweight, fast, and installable as a mobile or desktop app.

---

## ✨ Features

* 🔐 **Passwordless Authentication** using Firebase Email Link
* 💾 **Firestore Integration** for storing user and health data
* 🧠 **Offline-first PWA** (works even without internet)
* 💻 **Responsive UI** using Tailwind CSS and shadcn/ui
* ⚡ **Optimized for Speed** with Vite
* 🌙 **Dark/Light Mode**
* 📱 **Installable App** (Add to Home Screen)

---

## 🧱 Tech Stack

| Layer                | Technology                          |
| -------------------- | ----------------------------------- |
| **Frontend**         | React + TypeScript (Vite)           |
| **UI/UX**            | Tailwind CSS + shadcn/ui + Radix UI |
| **State Management** | React Query                         |
| **Auth & Backend**   | Firebase Authentication & Firestore |
| **Deployment**       | Firebase Hosting                    |
| **PWA Support**      | vite-plugin-pwa                     |

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/health-tap-away.git
cd health-tap-away
```

---

### 2️⃣ Install Dependencies

```bash
yarn install
```

or

```bash
npm install
```

---

### 3️⃣ Firebase Setup

Go to [Firebase Console](https://console.firebase.google.com) → Create a new project → Enable:

* **Authentication → Email Link (Passwordless Sign-in)**
* **Firestore Database** (if you store data)
* **Hosting** (for deployment)

---

### 4️⃣ Configure Environment Variables

Create a `.env` file in your project root and add your Firebase keys:

```
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-app.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-app.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

---

### 5️⃣ Firebase Client Setup

**File:** `src/integrations/firebase/client.ts`

```ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
```

---

### 6️⃣ Run the App Locally

```bash
yarn dev
```

Then visit 👉 [http://localhost:5173](http://localhost:5173)

---

## 🔐 Authentication Flow

### `src/pages/Auth.tsx`

Handles sending a **sign-in link** via email:

```tsx
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";

const auth = getAuth();

const actionCodeSettings = {
  url: "http://localhost:5173/finishSignIn",
  handleCodeInApp: true,
};

export async function sendSignInLink(email: string) {
  await sendSignInLinkToEmail(auth, email, actionCodeSettings);
  window.localStorage.setItem("emailForSignIn", email);
  alert("A sign-in link was sent to your email.");
}
```

---

### `src/pages/FinishSignIn.tsx`

Completes sign-in when the user clicks the link:

```tsx
import { getAuth, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function FinishSignIn() {
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem("emailForSignIn");
      if (!email) email = window.prompt("Please enter your email for confirmation");
      signInWithEmailLink(auth, email!, window.location.href)
        .then(() => {
          window.localStorage.removeItem("emailForSignIn");
          navigate("/dashboard");
        })
        .catch(console.error);
    }
  }, []);

  return <p>Signing you in...</p>;
}
```

---

## 🧩 Routing Setup

**File:** `src/main.tsx`

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import FinishSignIn from "./pages/FinishSignIn";
import Dashboard from "./pages/Dashboard";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/finishSignIn" element={<FinishSignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
```

---

## 📱 Progressive Web App (PWA)

**Install the plugin:**

```bash
yarn add vite-plugin-pwa
```

**vite.config.ts:**

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Health Tap Away",
        short_name: "HealthTap",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#0ea5e9",
        icons: [
          { src: "/pwa-192x192.png", sizes: "192x192", type: "image/png" },
          { src: "/pwa-512x512.png", sizes: "512x512", type: "image/png" },
        ],
      },
    }),
  ],
});
```

✅ Your app is now installable and works offline.

---

## 🚀 Deployment (Firebase Hosting)

### 1️⃣ Build the app

```bash
yarn build
```

### 2️⃣ Install Firebase tools

```bash
yarn global add firebase-tools
firebase login
```

### 3️⃣ Initialize Hosting

```bash
firebase init
```

Choose:

* ✅ Hosting
* Public directory: `dist`
* Single-page app rewrite: `y`

### 4️⃣ Deploy

```bash
firebase deploy
```

✅ Live URL → `https://your-project-name.web.app`

---

## 🧾 Folder Structure

```
health-tap-away/
├── public/
│   ├── favicon.ico
│   ├── pwa-192x192.png
│   ├── pwa-512x512.png
│   └── robots.txt
├── src/
│   ├── components/ui/
│   ├── hooks/
│   ├── integrations/firebase/
│   ├── pages/
│   │   ├── Auth.tsx
│   │   ├── FinishSignIn.tsx
│   │   └── Dashboard.tsx
│   ├── App.tsx
│   └── main.tsx
├── tailwind.config.ts
├── vite.config.ts
├── package.json
└── README.md
```

---

## 🔒 Firestore Rules (Optional)

If you’re using Firestore for health data storage, secure it with:

```bash
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

---

## 🧑‍💻 Author

**Whitney Shisia**
📧 [[your.email@example.com](mailto:your.email@example.com)]
💼 Software Developer & Journalism Student

---

## 🫶 Acknowledgements

* [Firebase](https://firebase.google.com/)
* [Vite](https://vitejs.dev/)
* [Tailwind CSS](https://tailwindcss.com/)
* [shadcn/ui](https://ui.shadcn.com/)
* [vite-plugin-pwa](https://vite-pwa-org.netlify.app/)

---

## 🩷 License

This project is licensed under the **MIT License** — free to use, modify, and distribute.
