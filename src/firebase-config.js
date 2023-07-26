// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVzbHv4J-OBzOV0zdn-dhzu6FgZRFMQCM",
  authDomain: "codeadore-f33a2.firebaseapp.com",
  projectId: "codeadore-f33a2",
  storageBucket: "codeadore-f33a2.appspot.com",
  messagingSenderId: "284027999925",
  appId: "1:284027999925:web:7710467ea6e93858b990fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();