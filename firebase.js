// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getStorage} from 'firebase/storage';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7JPsgq6eXG56tG5YNTwGyLdF5D87o3BY",
  authDomain: "helloworld-eabb3.firebaseapp.com",
  projectId: "helloworld-eabb3",
  storageBucket: "helloworld-eabb3.appspot.com",
  messagingSenderId: "462504940110",
  appId: "1:462504940110:web:1695b04f65306a674fe91f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const storage = getStorage();
const db = getFirestore();
export { auth,storage,db }
export default app;