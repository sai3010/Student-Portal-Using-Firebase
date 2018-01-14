 // Initialize Firebase
    var config = {
    apiKey: "AIzaSyAqIvSVJoknpvLJHG6Qn0om0JDfGVgJqdE",
    authDomain: "webapp-faf2d.firebaseapp.com",
    databaseURL: "https://webapp-faf2d.firebaseio.com",
    projectId: "webapp-faf2d",
    storageBucket: "webapp-faf2d.appspot.com",
    messagingSenderId: "294281955476"
    };
    firebase.initializeApp(config);

    function logout(){
  firebase.auth().signOut();
  window.location="index.html"
}
document.getElementById('registercard').onclick=function() {
	window.location="studcreate.html"
}
document.getElementById('uinfocard').onclick=function() {
    window.location="studupdate.html"
}
document.getElementById('updatescard').onclick=function() {
    window.location="view.html"
}
