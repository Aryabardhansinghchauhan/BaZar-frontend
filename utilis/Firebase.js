import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "loginbazar.firebaseapp.com",
  projectId: "loginbazar",
  storageBucket: "loginbazar.firebasestorage.app",
  messagingSenderId: "114636008903",
  appId: "1:114636008903:web:e491bc53ed9c5552a87de2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider }