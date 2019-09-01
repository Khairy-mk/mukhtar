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
   let save = document.getElementById("saved");
 
 
  // const firestore = firebase.firestore();
  let Container,SendingLayout,SuccessLayout,FailedLayout;
  Container=document.getElementById("Container");
  SendingLayout=document.getElementById("SendingLayout");
  SuccessLayout=document.getElementById("SuccessLayout");
  FailedLayout=document.getElementById("FailedLayout");

  SendingLayout.style.display = "none";
  SuccessLayout.style.display = "none";
  FailedLayout.style.display = "none";
 
  const saved= document.getElementById("saveData");

   let uname,dob, pob,email, phone, adress, password;
   Container=document.getElementById("container");
 const date= Date.now();
      saveData.addEventListener("click", () => {
      uname =document.getElementById("username").value;
      dob =document.getElementById("dbirth").value;
      pob =document.getElementById("pbirth").value;
      email =document.getElementById("email").value;
      phone =document.getElementById("mobilenumber").value;
      adress = document.getElementById("adress").value;
      password = document.getElementById("password").value;
      cpassword = document.getElementById("cpassword").value;
    
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
     else if (!password.match(/^[a-zA-Z0-9]+$/)||password.length<6){
        alert("Incorrect Password")
    }
     else if (!cpassword.match(/^[a-zA-Z0-9]+$/)||password.length<6){
         alert("Incorrect Password")
     }

     else {

        firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
            sendData();
         })
        .catch(function(error) {
           

            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("error:" +error)
            // ...
         
        });

         //alert ("Submitted");
         //Container.style.display="none";

         //window.location="sign in.html";
         
      
        
      } })
    

  const sendData=()=>{
    Container.style.display="none";
    SendingLayout.style.display="block";
    SendToDataBase();
}
const SendToDataBase=()=>{
    const docRef=db.collection("register").doc(phone)
    //let docref=db.collection("container").doc();
    docRef.set({
        uname: uname,
        dob: dob,
        pob: pob,
        email:email,
        phone: phone ,
        adress:adress ,
        password: password, 
        cpassword:cpassword
    
        
    }).then( function(){
        SendingLayout.style.display="none";
        SuccessLayout.style.display="block";
    }).catch(function(error){
        Container.style.display="block";
        FailedLayout.style.display="block";
    })
    const loginPage=document.getElementById("login");
    loginPage.addEventListener('click',()=>{
        window.location="../SIGNIN/log_in.html";   
    })
}