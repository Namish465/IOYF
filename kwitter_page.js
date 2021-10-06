var firebaseConfig = {
      apiKey: "AIzaSyDLXMziHuhvGR6sVoTddjM0WZDQ7V2LwXA",
      authDomain: "kwitterapp-8e715.firebaseapp.com",
      databaseURL: "https://kwitterapp-8e715-default-rtdb.firebaseio.com",
      projectId: "kwitterapp-8e715",
      storageBucket: "kwitterapp-8e715.appspot.com",
      messagingSenderId: "863611227942",
      appId: "1:863611227942:web:3253d28657046d552b3be7"
    };
    
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send()
    {

msg=document.getElementById("msg").value;

firebase.database().ref(room_name).push({

      name:user_name,
      message:msg,
      like:0
});

document.getElementById("msg").value = "";

}

function logout()
{

localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";


}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
