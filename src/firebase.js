// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvkfJ3dqzvBLCxyhR28BnSg4WB0shRZ0E",
  authDomain: "pmusiclogin-b55ef.firebaseapp.com",
  projectId: "pmusiclogin-b55ef",
  storageBucket: "pmusiclogin-b55ef.appspot.com",
  messagingSenderId: "475738216650",
  appId: "1:475738216650:web:a2117487f278ab3600bc33",
  databaseURL: "https://pmusiclogin-b55ef-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export { app, database };
