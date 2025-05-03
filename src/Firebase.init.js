// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx5w0lWo85Jbpwa_ayNI5kc3lp2M2fNnw",
  authDomain: "auth-intregation-private-ac93b.firebaseapp.com",
  projectId: "auth-intregation-private-ac93b",
  storageBucket: "auth-intregation-private-ac93b.firebasestorage.app",
  messagingSenderId: "216501808807",
  appId: "1:216501808807:web:984b2f2ec5cada3e32f582"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 // Initialize Firebase Authentication and get a reference to the service
 export const auth = getAuth(app);