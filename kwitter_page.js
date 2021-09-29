const firebaseConfig = {
    apiKey: "AIzaSyABOo37a53WpF8jRRgCsr5Bsh2lOVhICbk",
    authDomain: "kwitter-6ac43.firebaseapp.com",
    databaseURL: "https://kwitter-6ac43-default-rtdb.firebaseio.com",
    projectId: "kwitter-6ac43",
    storageBucket: "kwitter-6ac43.appspot.com",
    messagingSenderId: "97581094312",
    appId: "1:97581094312:web:fc9e9a6cf44bc2339ff99d",
    measurementId: "G-J8QFXZ3MM3"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");
  
  function send() {
        msg = document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0
        });
        document.getElementById("msg").value = "";
  }


function getData() { 
    firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html"
}