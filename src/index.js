import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

firebase.initializeApp({
  apiKey: "AIzaSyBIA0ncY2GrIdNMLhTlSm3KCyRH-3GJ0Jw",
  authDomain: "practica-react3.firebaseapp.com",
  databaseURL: "https://practica-react3.firebaseio.com",
  projectId: "practica-react3",
  storageBucket: "practica-react3.appspot.com",
  messagingSenderId: "1066403181665"
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
