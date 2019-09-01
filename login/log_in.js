// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBbzsoXlBL-QNQA4IjRlBA3lGiRxmHkPRk",
    authDomain: "ummul-58047.firebaseapp.com",
    databaseURL: "https://ummul-58047.firebaseio.com",
    projectId: "ummul-58047",
    storageBucket: "ummul-58047.appspot.com",
    messagingSenderId: "209871785657",
    appId: "1:209871785657:web:a476c20805416355"
  };
 

   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   console.log("firebase loaded");
   const db= firebase.firestore();
   const docRef = db.collection("messages").doc();
   const firestore = firebase.firestore();
   let save = document.getElementById("Singn In");
 
 