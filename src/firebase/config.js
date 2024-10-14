// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASFdTvDYqosr30L4dCrdjhzmk4C7rWHSw",
  authDomain: "ecommerce-6774c.firebaseapp.com",
  projectId: "ecommerce-6774c",
  storageBucket: "ecommerce-6774c.appspot.com",
  messagingSenderId: "569825015247",
  appId: "1:569825015247:web:cbae1abfe5e0d5a2818eba",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
