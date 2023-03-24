import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBFrtzNxFbraY6QLmNnj7_TcL5C1VLB-64",
  authDomain: "fir-course-8c5ee.firebaseapp.com",
  projectId: "fir-course-8c5ee",
  storageBucket: "fir-course-8c5ee.appspot.com",
  messagingSenderId: "689979132999",
  appId: "1:689979132999:web:fee522eb289a1e5c9cf562"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);
