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

    var title = document.getElementById('cardtitle');
    var msg = document.getElementById('carddesc');
    var databaseRef = firebase.database().ref('message/');
    databaseRef.once('value', function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
                var childData = childSnapshot.val();  //gets all the child data
                //var row=document.writeln("<div>");
                //row.innerHTML=""+childData.title+"";
                //row.className="container row col s12 m6 card blue-grey darken-1 card-content white-text"
                title.innerHTML=""+childData.title+"";
                msg.innerHTML=""+childData.message+"";
            });
        });