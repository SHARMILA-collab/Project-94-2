var firebaseConfig = {
    apiKey: "AIzaSyCS3SK7hjMTYVI6_vJJ8O1eohV8NgSg8qg",
    authDomain: "project-94-c8853.firebaseapp.com",
    projectId: "project-94-c8853",
    storageBucket: "project-94-c8853.appspot.com",
    messagingSenderId: "994158943421",
    appId: "1:994158943421:web:4425e905b154b1f30e2bd4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addName() {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose: "adding user"
      });
  }