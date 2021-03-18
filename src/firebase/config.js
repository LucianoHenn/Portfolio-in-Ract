import firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore';

export const app = firebase.initializeApp({
    "projectId": "candelaria-bfe12",
    "appId": "1:146529794297:web:5b2844688c302612e8ca28",
    "storageBucket": "candelaria-bfe12.appspot.com",
    "locationId": "us-central",
    "apiKey": "AIzaSyArz0cpoH_4T6oTfmFd9j3CzGy1sfHp5W4",
    "authDomain": "candelaria-bfe12.firebaseapp.com",
    "messagingSenderId": "146529794297"
  });

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };