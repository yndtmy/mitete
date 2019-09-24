
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCT0UbTftec2UypYEAjxPrrYJV5VyNDoRc",
    authDomain: "mitete2-c458b.firebaseapp.com",
    databaseURL: "https://mitete2-c458b.firebaseio.com",
    projectId: "mitete2-c458b",
    storageBucket: "",
    messagingSenderId: "213076620921",
    appId: "1:213076620921:web:f0271fd6308b9c124706a8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//メッセージの送受信準備
var newPostRef = firebase.database().ref();//データベースのどこに入れるかを決める