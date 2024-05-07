import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import dotenv from 'dotenv';

//dotenv.config();

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_APIKEY,
  // authDomain: process.env.REACT_APP_AUTHDOMAIN,
  // projectId: process.env.REACT_APP_PROJECTID,
  // storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  // appId: process.env.REACT_APP_APPID 
  apiKey: "AIzaSyAVDWWqCfJADYMVSiZ_1udRtgukRRgdwQs",
  authDomain: "expense-tracker-cafdb.firebaseapp.com",
  projectId: "expense-tracker-cafdb",
  storageBucket: "expense-tracker-cafdb.appspot.com",
  messagingSenderId: "1065185125006",
  appId: "1:1065185125006:web:7606683d6233524e329fdf"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
