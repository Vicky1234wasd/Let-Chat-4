//YOUR FIREBASE LINKS
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

    room_name = localStorage.getItem("room_name");

function send()
{
      msg = document.getElementById("msg").ariaValueMax;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
         console.log(firebase_message_id);
         console.log(message_data);
         user_name = message_data['name'];
         message = message_data['message'];
         like = message_data['like'];
         name_with_tag = "<h4>" + user_name + "<img class='user_tick' src='tick.png'></h4>";
         message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
         like_button = "<button class='btn btn-warning' id = " + firebase_message_id + "value =" + like + " onclick='updateLike(this.id'>";
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span><button><hr>";

         row = name_with_tag + message_with_tag + like_button + span_with_tag;
         document.getElementById("output").innerHTML += row;
//End code 
      } });  }); }
getData();

function updateLike(message_id)
{
  console.log("clicked on like button - " + message_id);
  button_id = message_id;
  likes = document.getElementById(button_id).value;
  update_likes = Number(likes) + 1;
  console.log(update_likes);

  firebase.database().ref(room_name).child(message_id).update({
   like : update_likes    
  });

}

function logOut() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
