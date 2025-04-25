import { initializeApp } from "firebase/app";

import { 
  getFirestore, initializeFirestore, 
  collection, addDoc, getDocs, updateDoc, deleteDoc, doc, onSnapshot 
} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAnPqHZvBeRSWJ6h3CIcgTcTAiZm3M2tys",
  authDomain: "food-marketing-9e760.firebaseapp.com",
  projectId: "food-marketing-9e760",
  storageBucket: "food-marketing-9e760.appspot.com",
  messagingSenderId: "720592291995",
  appId: "1:720592291995:web:f6bb616f6cf78078309e3e",
  measurementId: "G-GL7ZER4L10"
};

// اینجا با استفاده از ماژول‌های جدید Firebase کار می‌کنید
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db , storage};
