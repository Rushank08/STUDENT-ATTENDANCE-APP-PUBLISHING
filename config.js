import * as firebase from "firebase"
 var firebaseConfig = {
    apiKey: "AIzaSyBloIOon-I8FqwAINVn3hsKmaSyPJBJnRY",
    authDomain: "school-attendence-app-1cff8.firebaseapp.com",
    databaseURL: "https://school-attendence-app-1cff8-default-rtdb.firebaseio.com",
    projectId: "school-attendence-app-1cff8",
    storageBucket: "school-attendence-app-1cff8.appspot.com",
    messagingSenderId: "279355184049",
    appId: "1:279355184049:web:c9cd39baf9a176c63d2390"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.database();
 
 

  