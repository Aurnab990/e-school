// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZ1IOIESOEqbBykZHNX28R4B2FmAzTrKs",
  authDomain: "e-school-84b60.firebaseapp.com",
  projectId: "e-school-84b60",
  storageBucket: "e-school-84b60.appspot.com",
  messagingSenderId: "89714745538",
  appId: "1:89714745538:web:c45aad1624acd688b21b5b",
  measurementId: "G-KPVK8T2L3B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app