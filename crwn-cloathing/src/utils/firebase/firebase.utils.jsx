import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyARDrjnx_G9oasg2W1gc3pD2ujr125u5MQ",
    authDomain: "crwn-clothing-db-34f25.firebaseapp.com",
    projectId: "crwn-clothing-db-34f25",
    storageBucket: "crwn-clothing-db-34f25.appspot.com",
    messagingSenderId: "878562521093",
    appId: "1:878562521093:web:441175342e38c613bfac6c"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

// https://stackoverflow.com/questions/60493990/firebase-what-this-means-to-set-custom-parameters-to-provider
googleProvider.setCustomParameters({
    prompt: 'select_account'
});

// get the oauth token
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) {
        return
    }
    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword= async (email, password) => {
    if (!email || !password) {
        return
    }
    return await signInWithEmailAndPassword(auth, email, password)
}
