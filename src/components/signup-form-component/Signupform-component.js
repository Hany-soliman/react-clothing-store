import {useState,} from "react";
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/Form-input-component";
import "./signupform.styles"
import Button from "../button-component/Button.component";
import {Header, SignUpContainer} from "./signupform.styles";
import He from "styled-components/dist/styled-components.browser.esm";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}
const SignupForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {displayName, email, password, confirmPassword} = formFields

    const resetFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            throw new Error('The passwords don\'t match')
        } else {
            const {user} = await createAuthUserWithEmailAndPassword(email, password)
            const userDocRef = await createUserDocumentFromAuth(user, {displayName})
            resetFields()
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormFields({...formFields, [name]: value})
    }
    return (
        <SignUpContainer>
            <Header>Don't have an account?</Header>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Display Name' type="text" required onChange={handleChange} name="displayName"
                           value={displayName}/>
                <FormInput label='Email' type="email" required onChange={handleChange} name="email" value={email}/>
                <FormInput label='Password' type="password" required onChange={handleChange} name="password"
                           value={password}/>
                <FormInput label='Confirm Password' type="password" required onChange={handleChange}
                           name="confirmPassword" value={confirmPassword}/>
                <Button type='submit'>Sign Up</Button>
            </form>
        </SignUpContainer>
    )
}

export default SignupForm