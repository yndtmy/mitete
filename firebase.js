
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

var otherProjectfirebaseConfig = {
    apiKey: "AIzaSyCZU6tMt-YXem-zS7JJbKkv1c_aZGqFWck",
    authDomain: "mitete-3804a.firebaseapp.com",
    databaseURL: "https://mitete-3804a.firebaseio.com",
    projectId: "mitete-3804a",
    storageBucket: "",
    messagingSenderId: "788696255230",
    appId: "1:788696255230:web:0c27816d405215e7c373af"
};


// Initialize Firebase
var project = firebase.initializeApp(firebaseConfig);
// console.log(firebase.app().name);

var otherProject = firebase.initializeApp(otherProjectfirebaseConfig, "other");
// console.log(otherProject.name);

//メッセージの送受信準備
var newPostRef = otherProject.database().ref();
var newPostRef2 = project.database().ref();//データベースのどこに入れるかを決める