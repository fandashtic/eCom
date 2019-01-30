import * as firebase from "firebase";

var config = {
    apiKey: "AIzaSyDod-E6Mg9n-BGwQrGu2xgJ52hZiq2iXZE",
    authDomain: "fir-project-e718d.firebaseapp.com",
    databaseURL: "https://fir-project-e718d.firebaseio.com",
    projectId: "fir-project-e718d",
    storageBucket: "fir-project-e718d.appspot.com",
    messagingSenderId: "425644808055"
};

firebase.initializeApp(config); 

export const ref = firebase.database().ref();
export const studentsList = ref.child('students');
export const studentsData = ref.child('/students/record');
