import firebase from 'firebase/app';
import 'firebase/firebase-database';
import 'firebase/storage';
import 'firebase/auth';



var firebaseConfig = {
    apiKey: "AIzaSyBBuJS-KxOyCVi7ZpfZlouWkNj58SsYAgU",
    authDomain: "lenezvert.firebaseapp.com",
    databaseURL: "https://lenezvert-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "lenezvert",
    storageBucket: "lenezvert.appspot.com",
    messagingSenderId: "556581681022",
    appId: "1:556581681022:web:460e10e94eac662569252f"
  };
    /*
    if (!firebase.apps.length) {
        
        
    }else {
        firebase.app();
         // if already initialized, use that one
    }
    */

    firebase.initializeApp(firebaseConfig);
    const db = firebase.database();


    export const ParfumLoad = (collection) => {

        return db
        .ref(collection)
        .once('value')
    }










export default firebase;