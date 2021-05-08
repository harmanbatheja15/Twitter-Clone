import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCuNBXVUY-knESqjy5WuJy8ajZNdcYA-AI",
    authDomain: "twitter-clone-d1e61.firebaseapp.com",
    projectId: "twitter-clone-d1e61",
    storageBucket: "twitter-clone-d1e61.appspot.com",
    messagingSenderId: "139172145909",
    appId: "1:139172145909:web:b8f61e34afdba303ba73bc",
    measurementId: "G-EBVEELTM09"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
