var firebaseConfig = {
    apiKey: "AIzaSyCCfd6hYc5XTEIzvjpngCdSGPpG-ETgpfE",
    authDomain: "mitetelogin.firebaseapp.com",
    databaseURL: "https://mitetelogin.firebaseio.com",
    projectId: "mitetelogin",
    storageBucket: "",
    messagingSenderId: "173683870340",
    appId: "1:173683870340:web:1d31ce8330c28f6a4d10d1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//メッセージの受信準備
var newPostRef = firebase.database().ref();