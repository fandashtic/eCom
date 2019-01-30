import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAQLCpKGof7el_d9XS5iP3c2Zi7DXwKKiY",
    authDomain: "e-commerce-f49e1.firebaseapp.com",
    databaseURL: "https://e-commerce-f49e1.firebaseio.com",
    projectId: "e-commerce-f49e1",
    storageBucket: "e-commerce-f49e1.appspot.com",
    messagingSenderId: "336970934425"
};

firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const companyData = ref.child('/company/record');