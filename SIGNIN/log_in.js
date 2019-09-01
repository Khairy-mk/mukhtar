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
   //const firestore = firebase.firestore();
   
   let email,password;
   const login = document.getElementById("Login");
   login.addEventListener('click', () =>{
     email = document.getElementById("email").value;
     password = document.getElementById("password").value;

     firebase.auth().signInWithEmailAndPassword(email, password).then(function(){
       window.location ="../index.html";
     }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      console.log("error;" + error)
    });
    
   })

