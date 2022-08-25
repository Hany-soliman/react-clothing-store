import {useState,} from "react";
import FormInput from "../form-input/Form-input-component";
import Button, {BUTTON_TYPE_CLASSES} from "../button-component/Button.component";
import {
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword,
    signInWithGooglePopup
} from "../../utils/firebase/firebase.utils";
import "./sign-in-form.styles"
import {SignInButtonsContainer, SignInContainer, SignInHeader} from "./sign-in-form.styles";


const defaultFormFields = {
    email: '',
    password: '',
}
const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {email, password} = formFields

    const resetFields = () => {
        setFormFields(defaultFormFields)
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup()
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const {user} = await signInAuthUserWithEmailAndPassword(email, password)
        resetFields()
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormFields({...formFields, [name]: value})
    }
    return (
        <SignInContainer>
            <SignInHeader>Sign in with your email and password</SignInHeader>
            <form onSubmit={handleSubmit}>
                <FormInput label='Email' type="email" required onChange={handleChange} name="email" value={email}/>
                <FormInput label='Password' type="password" required onChange={handleChange} name="password"
                           value={password}/>
                <SignInButtonsContainer>
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google sign in</Button>
                </SignInButtonsContainer>
            </form>
        </SignInContainer>
    )
}

export default SignInForm