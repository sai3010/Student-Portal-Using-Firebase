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

    var databaseRef = firebase.database().ref('users/');
    var db='/users/';
     function save_user() {
            var e = document.getElementById("branch");
            var strbranch = e.options[e.selectedIndex].text;
            switch(strbranch)
            {
                case "CSE":var databaseRef = firebase.database().ref('cse/');
                           var db='/cse/';
                           break;
                case "ECE":var databaseRef = firebase.database().ref('ece/');
                           var db='/ece/';
                           break;
                case "EEE":var databaseRef = firebase.database().ref('eee/');
                           var db='/eee/';
                           break;
                case "EIE":var databaseRef = firebase.database().ref('eie/');
                           var db='/eie/';
                           break;
                case "MECH":var databaseRef = firebase.database().ref('mech/');
                           var db='/mech/';
                           break;
                case "CIVIL":var databaseRef = firebase.database().ref('civil/');
                           var db='/civil/';
                           break;
                case "MCA":var databaseRef = firebase.database().ref('mca/');
                           var db='/mca/';
                           break;
                case "ISE":var databaseRef = firebase.database().ref('ise/');
                           var db='/ise/';
                           break;
            }

            var firstname = document.getElementById('fname').value.toUpperCase();
            var lastname = document.getElementById('lname').value.toUpperCase();
            var usn = document.getElementById('usn').value.toUpperCase();
            var email = document.getElementById('email').value;
            var phone = document.getElementById('mob').value;
            var aggregate = document.getElementById('agg').value;
            var backlog = document.getElementById('backlog').value;
            var dateVariable = $("#datepick").val();
            var uid = firebase.database().ref().child('users').push().key; //random key generation
            /*if (document.getElementById('male').checked) {
  			radioval = document.getElementById('male').value;
			}
			if (document.getElementById('female').checked) {
  			radioval = document.getElementById('female').value;
			}*/
			var gender = document.getElementById("gender");
			var strgender = gender.options[gender.selectedIndex].text;
			var e = document.getElementById("branch");
			var strbranch = e.options[e.selectedIndex].text;

            var data = {
                user_id: uid,
                firstname:firstname,
                lastname:lastname,
                branch:strbranch,
                gender:strgender,
                usn:usn,
                email:email,
                phone:phone,
                aggregate:aggregate,
                backlog:backlog,
                dob:dateVariable
            }

            var updates = {};
            updates[db + usn] = data;            // + usn makes it a primary key.
            firebase.database().ref().update(updates);
            alert('success');

            reload_page();
        }
function reload_page() {
    window.location.reload();
   }

function logout(){
  firebase.auth().signOut();
  window.location="index.html"
}
