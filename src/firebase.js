import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC55nbWsIrqp0sLgRNLJ8-pmMQeVaazTwA",
    authDomain: "netflix-clone-23353.firebaseapp.com",
    projectId: "netflix-clone-23353",
    storageBucket: "netflix-clone-23353.appspot.com",
    messagingSenderId: "223874064056",
    appId: "1:223874064056:web:c37ec4127ee85199859e4d",
    measurementId: "G-J3YVYP0RC5"
  };

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
// const auth = firebaseApp.auth();
const auth = getAuth(firebaseApp);

export {auth};
export default db;