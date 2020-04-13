import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB0kyiubIv2Tz7sKfqyHuf70Pk7grdw-qk",
  authDomain: "bu-clothing-db.firebaseapp.com",
  databaseURL: "https://bu-clothing-db.firebaseio.com",
  projectId: "bu-clothing-db",
  storageBucket: "bu-clothing-db.appspot.com",
  messagingSenderId: "657717968066",
  appId: "1:657717968066:web:697ac6b5e8bb66bebacf5b",
  measurementId: "G-VNKZ9LJQ6M",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("Error Creating User", err.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

//firestore.collection('uses).doc('xxxx').collection('cartItems').doc('yyyy')

//firestore.doc('/users/xxxx/cartitems/yyyy')

//firestore.collection('/users/xxxx/cartitems')
