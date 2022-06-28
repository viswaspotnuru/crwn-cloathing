import { useState } from 'react';
import { createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import './sign-up-form.styles.scss';
import Button from '../button/button.component'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = (props) => {
    const [formFields, setFromFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    const handleSubmit = async (event) => {
        event.preventDefault()
        if (password !== confirmPassword) {
            alert('password do not match');
            return;
        }
        try {
            const response = createAuthUserWithEmailAndPassword(email, password);
            console.log(response);
        } catch (err) {
            console.log("user creation encountered and an error", err);
        }
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(event)
        setFromFields((prevState) => { return { ...prevState, [name]: value } });
    }
    return (
        <div className='sign-up-container'>
            <h2>Don't have an account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={() => { }}>
                <FormInput
                    label='Display Name'
                    type='text'
                    required
                    name='displayName'
                    value={displayName}
                    onChange={handleChange} />
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
                <FormInput
                    label='Confirm Password'
                    type='password'
                    required
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange} />
                <Button buttonType='google' type='submit'>Sign Up</Button>
            </form>

        </div>
    );
}

export default SignUpForm;