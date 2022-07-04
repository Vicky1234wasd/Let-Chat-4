
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBtT9q7McBJ0sf_BStwsN0Mabgx5E9aSc8",
      authDomain: "kwitter-4df8c.firebaseapp.com",
      databaseURL: "https://kwitter-4df8c-default-rtdb.firebaseio.com",
      projectId: "kwitter-4df8c",
      storageBucket: "kwitter-4df8c.appspot.com",
      messagingSenderId: "200273207669",
      appId: "1:200273207669:web:bb3825b638a96537c5b33c",
      measurementId: "G-2LY926B9ET"
    };

    const app = initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome" + user_name + "!";

function addRoom ()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
      });

     localStorage.setItem("room_name", room_name);

     window.location = "kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id=" + Room_names +" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>"
        document.getElementById("output").innerHTML += row;
        //End code
      });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logOut() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}