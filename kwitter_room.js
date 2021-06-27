
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCv6P1Eh1e1Fd-nwkOJo4HfBfOrfeC-ENM",
      authDomain: "kwitter-86bb7.firebaseapp.com",
      projectId: "kwitter-86bb7",
      storageBucket: "kwitter-86bb7.appspot.com",
      messagingSenderId: "344609414356",
      appId: "1:344609414356:web:8e3a2a5311c3d59b116f41"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
