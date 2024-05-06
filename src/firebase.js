import firebase from 'firebase/app';
import 'firebase/messaging';

const firebaseConfig = {
    // Your Firebase project configuration
};

firebase.initializeApp(firebaseConfig);

export default firebase;
