import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC_2sIVZbf6M59P28TJBJmlf0uJ-c6QGZw",
    authDomain: "fun-food-friends-8b604.firebaseapp.com",
    databaseURL: "https://fun-food-friends-8b604.firebaseio.com",
    projectId: "fun-food-friends-8b604",
    storageBucket: "fun-food-friends-8b604.appspot.com",
    messagingSenderId: "647777852428",
    appId: "1:647777852428:web:2055c63eb61232ff9aa229"
};

firebase.initializeApp(config);
export default firebase;

