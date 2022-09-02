import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDUCgVZNPwC3HwfHF0gNeYOpLM8rZo_mvA",
    authDomain: "onlineshop-e3adc.firebaseapp.com",
    projectId: "onlineshop-e3adc",
    storageBucket: "onlineshop-e3adc.appspot.com",
    messagingSenderId: "1043975422376",
    appId: "1:1043975422376:web:a9c6e75aa6c215c1045d9d",
    measurementId: "G-VNLRSRK7BT"
  };

  const firebaseapp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
    prompt: "select_account",
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

  export const db = getFirestore();

  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd, field = 'title') => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
      const docRef = doc(collectionRef, object[field].toLowerCase());
      batch.set(docRef, object);
    });

    await batch.commit();
    console.log('done');
  } 

  export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
       const { title, items } = docSnapshot.data();
       acc[title.toLowerCase()] = { items, title };
       return acc;
    }, {});
    return categoryMap;
  }

  export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if(!userAuth) return;
    const userDocRef = doc(db, "users", userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, { displayName, email, createdAt, ...additionalInformation});
        } catch(error) {
            console.log("error creating the user", error.message);
        }
    }

    return userSnapshot;
  }

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
  }

  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
  }

  export const signOutUser = async () => {
    return await signOut(auth);
  }
  

  export const onAuthStateChangedListener = (callback) => {
    return onAuthStateChanged(auth, callback); 
  } 