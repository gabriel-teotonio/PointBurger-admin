import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyBZNCaec_d_NEksICPhLs2AxjE64k4abOE",
   authDomain: "avalia-4a968.firebaseapp.com",
   projectId: "avalia-4a968",
   storageBucket: "avalia-4a968.appspot.com",
   messagingSenderId: "194487410132",
   appId: "1:194487410132:web:388f25e8ef335aec908a41"
 };

const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
export const auth = getAuth(app)