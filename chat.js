function ChatA(){
    chat=document.getElementById("Chat").value;
    localStorage.setItem("chat",chat);
    window.location="chatroom.html";




    const firebaseConfig = {
        apiKey: "AIzaSyBgY4gAhB-I1kGH8IU-fRjJTE9mkYiqdWk",
        authDomain: "chatnationgns.firebaseapp.com",
        databaseURL: "https://chatnationgns-default-rtdb.firebaseio.com",
        projectId: "chatnationgns",
        storageBucket: "chatnationgns.appspot.com",
        messagingSenderId: "558921091626",
        appId: "1:558921091626:web:f3631f7dbe0d493746d153",
        measurementId: "G-HBR4QRJ2TG"
      };
      
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);


}function chatsocial(){
    var usergeter=document.getElementById("Chat").value;
    firebase.database().ref("/").child(usergeter).update({
        purpose:"add user name"
    });
    }



