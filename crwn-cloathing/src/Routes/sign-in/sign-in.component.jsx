import React from 'react';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';


function SignIn(props) {
    const logGoogleUser = async () =>{
        const { user } = await signInWithGooglePopup();
        console.log(user);
        const userDocRef = await createUserDocumentFromAuth(user);
    }
    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick = {logGoogleUser}>Sign in with Google popup</button>
            <SignUpForm/>
        </div>
    );
}

export default SignIn;