/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional





const config = {
  apiKey: "AIzaSyAfmTcIXJWLPo6Ao3LFh4OPr8XbYPwRl-c",
  authDomain: "tutorial-friendlychat-1d3fb.firebaseapp.com",
  projectId: "tutorial-friendlychat-1d3fb",
  storageBucket: "tutorial-friendlychat-1d3fb.appspot.com",
  messagingSenderId: "163459343901",
  appId: "1:163459343901:web:60f0820296c73b5132c8f4",
  measurementId: "G-8K8K66J6K6"
};
export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}

// Initialize Firebase
const app = initializeApp(config);
const analytics = getAnalytics(app);