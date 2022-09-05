
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth} from "firebase/auth";

// import { connectAuthEmulator } from "firebase/auth";
// import {connectFirestoreEmulator} from "firebase/firestore"
// import { connectFunctionsEmulator } from "firebase/functions";

import { getFunctions} from "firebase/functions";
import { getApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  databaseURL: import.meta.env.VITE_databaseURL,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderI,
  appId: import.meta.env.VITE_appId,
};


const app = initializeApp(firebaseConfig);
// eslint-disable-next-line @typescript-eslint/no-unused-vars

export const db = getFirestore();
export const auth = getAuth(app)
export const functions = getFunctions(getApp());

//comment ou all the below code to run it on the live backend 

//for use on local network :type ipconfig into powershell and replace 192.168.0.105 
//with your  ipv4 one

// comment this out for locahost LAN use

// const ipv4 =`192.168.43.238`
// const ipv4=`${process.env.REACT_APP_IPV4}` 
// console.log("ipv4  in var ===== ",ipv4)
// connectFunctionsEmulator(functions, "localhost", 5001);
// connectFirestoreEmulator(db,ipv4, 8080);
// connectAuthEmulator(auth, `http://${ipv4}:9099`);


//comment this out for localhost use

// connectFirestoreEmulator(db, 'localhost', 8080);
// connectAuthEmulator(auth, "http://localhost:9099");
// connectFunctionsEmulator(functions, "localhost", 5001);




