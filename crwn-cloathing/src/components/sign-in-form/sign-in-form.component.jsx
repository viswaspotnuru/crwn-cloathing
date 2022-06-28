import { useState } from 'react';
import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import './sign-in-form.styles.scss';
import Button from '../button/button.component'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignInForm = (props) => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {  email, password } = formFields;
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
      };

      const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
      };
    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const response = await signInAuthUserWithEmailAndPassword(
              email,
              password
            );
            console.log(response);
            resetFormFields();
        }
        catch (error) {
            switch (error.code) {
              case 'auth/wrong-password':
                alert('incorrect password for email');
                break;
              case 'auth/user-not-found':
                alert('no user associated with this email');
                break;
              default:
                console.log(error);
            }
          }
        };
    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(event)
        setFormFields({ ...formFields, [name]: value });
    }
    return (
        <div className='sign-in-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Email'
                    type='email'
                    required
                    name='email'
                    value={email}
                    onChange={handleChange} />
                <FormInput
                    label='Password'
                    type='password'
                    required
                    name='password'
                    value={password}
                    onChange={handleChange} />
                <div className='buttons-container'>
                    <Button buttonType='inverted' type='submit'>Sign Up</Button>
                    <Button buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
            </form>

        </div>
    );
}

export default SignInForm;