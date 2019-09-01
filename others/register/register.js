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
   let save = document.getElementById('save');
 
 
  // const firestore = firebase.firestore();
 
   let uname,dob, pob,email, phone, adress, password;
 const date= Date.now();
      save.addEventListener("click", () => {
      uname =document.getElementById("username").value;
      dob =document.getElementById("dbirth").value;
      pob =document.getElementById("pbirth").value;
      email =document.getElementById("email").value;
      phone =document.getElementById("mobilenumber").value;
      adress = document.getElementById("adress").value;
      password = document.getElementById("password").value;
    
     if (!uname.match(/^[a-zA-Z]+$/)){
         alert ("Enter Your  username")
     }
     else if (!dob.match(/^[0-9]+$/)){
         alert ("Enter Your date of birth")
     }

     else if (!pob.match(/^[a-zA-Z]+$/)){
        alert ("Enter Your place of birth")
    }
     
     else if (!email.includes("@")) {
         alert ("Invalid email ")
     }
     else if (!phone.match(/^[0-9]+$/)||phone.length < 11 || phone.length > 11) {
         alert ("Incorrect Phone Number")
     }
     else if (!adress.match(/^[a-zA-Z]+$/)){
         alert ("Incorrect Subject")
     }
     else if (!password.match(/^[a-zA-Z0-9]+$/)||password.length<8){
         alert("Incorrect Password")
     }

     else {
         alert ("Submitted");
 
 
         docRef.set({
         uname: uname,
         dob: dob,
         pob: pob,
         email:email,
         phone: phone ,
         adress:adress ,
         password: password 
         
       }).then(function(){
         console.log("Successfully Saved");
       }).catch(function(error){
         console.log("Got an error:",error);
       });    
     };    
 
   });
 
 