import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';


const config =
    {
        apiKey: "AIzaSyC6iUXKYQ3Ns9W0_Pb7hgmty9XXitK_OIQ",
        authDomain: "crowndb-d2031.firebaseapp.com",
        projectId: "crowndb-d2031",
        storageBucket: "crowndb-d2031.appspot.com",
        messagingSenderId: "647760685616",
        appId: "1:647760685616:web:2847292a011021c8239bf5",
        measurementId: "G-23XH4LDZHC"
    }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const  provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt:'select_account '});

export  const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

