import firebase from 'firebase';

const Config = {
	apiKey: "AIzaSyBI-HsywNp6CVQakge1T5u0laVigx3yHB8",
    authDomain: "projectofinal-37404.firebaseapp.com",
    databaseURL: "https://projectofinal-37404.firebaseio.com",
    projectId: "projectofinal-37404",
    storageBucket: "projectofinal-37404.appspot.com",
    messagingSenderId: "1070679779852",
    appId: "1:1070679779852:web:99a4603c21ef4bebcddc29"
};

const fire = firebase.initializeApp(Config);
export default fire;
