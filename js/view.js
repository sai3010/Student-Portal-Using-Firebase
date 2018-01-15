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
                cont=$('<div/>').attr("class","container").appendTo(document.body);
                row=$('<div/>').attr("class","row").appendTo(cont);
                col=$('<div/>').attr("class","col s12 m12 l12").appendTo(row);
                cardcolor=$('<div/>').attr("class","card blue-grey darken-1").appendTo(col);
                card=$('<div/>').attr("class","card-content white-text").appendTo(cardcolor);
                cardcont = $('<span/>').attr("class", "card-title").text(childData.title).appendTo(card);
                para=$('<p/>').text(childData.message).appendTo(cardcont);
                card=$('<div/>').attr("class","card-action").appendTo(para);
                a1=$('<a/>').attr("class","date").text(childData.date).appendTo(card);
            });
        });