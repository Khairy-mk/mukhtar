 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBvOgOfl7MNI9W7MQjr75kZtY9SGM7l-mk",
    authDomain: "muhammad-5ba2a.firebaseapp.com",
    databaseURL: "https://muhammad-5ba2a.firebaseio.com",
    projectId: "muhammad-5ba2a",
    storageBucket: "muhammad-5ba2a.appspot.com",
    messagingSenderId: "656018929844",
    appId: "1:656018929844:web:e5b96090ea6b9e03"
  };


 // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log("firebase loaded");
  const db= firebase.firestore();
  const docRef = db.collection("messages").doc();
  const firestore = firebase.firestore();
  let save = document.getElementById('save');


 // const firestore = firebase.firestore();

  let Sname, Lname, Email, Phone, Uname, Pass, CPass;
const date= Date.now();
     save.addEventListener("click", () => {
     Sname =document.getElementById("Surname").value;
     Lname =document.getElementById("Lastname").value;
     Email =document.getElementById("Email").value;
     Phone =document.getElementById("Number").value;
     Uname =document.getElementById("Username").value;
     Pass = document.getElementById("Password").value;
     CPass = document.getElementById("CPassword").value;
   
    if (!Sname.match(/^[a-zA-Z]+$/)){
        alert ("Enter Your  SurName")
    }
    else if (!Lname.match(/^[a-zA-Z]+$/)){
        alert ("Enter Your lastName")
    }
    else if (!Email.includes("@")) {
        alert ("Invalid Email ")
    }
    else if (!Phone.match(/^[0-9]+$/)||Phone.length < 11 || Phone.length > 11) {
        alert ("Incorrect Phone Number")
    }
    else if (!Uname.match(/^[a-zA-Z]+$/)){
        alert ("Incorrect Subject")
    }
    else if (!Pass.match(/^[a-zA-Z0-9]+$/)||Pass.length<8){
        alert("Incorrect Password")
    }
    else if (!CPass.match(Pass)){
        alert ("Comfirm Password")
    }
    else {
        alert ("Submitted");


        docRef.set({
        Sname: Sname,
        Lname: Lname,
        Email: Email,
        Phone: Phone ,
        Uname: Uname ,
        Pass: Pass ,
        CPass: CPass 
      }).then(function(){
        console.log("Successfully Saved");
      }).catch(function(error){
        console.log("Got an error:",error);
      });    
    };    

  });

