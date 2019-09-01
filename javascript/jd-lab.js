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
 firebase.initializeApp(firebaseConfig)
  console.log("firebaseloaded");
  const db = firebase.firestore();
  const docRef=db.collection("messages").doc();
  const firestore = firebase.firestore();
  const save = document.getElementById('save');

 save.addEventListener("click",() => {
    var name =document.getElementById("First Name").value;
    var sname =document.getElementById("Surname").value;
    var Email =document.getElementById("Email").value;
    var phone =document.getElementById("Mobile Number").value;
    var Adress = document.getElementById("Contact Adress").value;
    var Message = document.getElementById("Message").value;
   
    if (!name.match(/^[a-zA-Z]+$/)){
        alert ("Incorrect Name")
    }
    else if (!sname.match(/^[a-zA-Z]+$/)){
        alert ("Incorrect Subject")
    }
    else if (!Email.includes("@")) {
        alert ("Invalid Email ")
    }
    else if (!phone.match(/^[0-9]+$/)||phone.length < 11 || phone.length > 11) {
        alert ("Incorrect Phone Number")
    }

    else if (!Adress.match(/^[a-zA-Z]+$/)){
        alert("Incorrect Adress")
    }
    else if (!Message.match(/^[a-zA-Z]+$/)){
        alert ("Incorrect Message")
    }
    else {
        alert ("Submitted")
        docRef.set({
            name:name,
            sname: sname,
            Email: Email,
            phone: phone,
            Adress:Adress,
            Message:Message
            
            }
            ) 
            .then(function(){
              console.log("SUCCESSFULLY SAVED");
            })
            .catch(function(error){
              console.log("Got an Error:"+ error);
            });
        }
      }); 