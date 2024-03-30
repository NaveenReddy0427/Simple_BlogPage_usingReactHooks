// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAh2HulLJib3SmijhtbBOLlQTqPnUkgQh4",
  authDomain: "blogapp-hooks.firebaseapp.com",
  projectId: "blogapp-hooks",
  storageBucket: "blogapp-hooks.appspot.com",
  messagingSenderId: "823294093157",
  appId: "1:823294093157:web:adff05f1fdc37d9cfca38c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)