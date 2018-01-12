$(document).ready(function() {
    Materialize.updateTextFields();
  });

/* log in starts here*/
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    window.location="stud.html";

  } else {
    // No user is signed in.

    
  }
});
function create(){
      var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  alert(errorMessage);
});
}
function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function logout(){
  firebase.auth().signOut();
  window.location="index.html"
}
/* login ends hrer ................*/