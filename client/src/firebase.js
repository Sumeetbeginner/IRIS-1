
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBNFjgik7KP14e8JRqJ3wg7kWpcPrbr4_c",
    authDomain: "iris-6.firebaseapp.com",
    projectId: "iris-6",
    storageBucket: "iris-6.appspot.com",
    messagingSenderId: "207675083491",
    appId: "1:207675083491:web:49ad70068f1bb8b0db53d6",
    measurementId: "G-96L3608ZZJ"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);

export { auth, database, firebaseApp };