import SignupForm from "../../components/signup-form-component/Signupform-component";
import SignInForm from "../../components/sign-in-form-component/Sign-in-form-component";
import "./authentication.styles"
import AuthenticationContainer from "./authentication.styles";

const Authentication = () => {

    return (
        <AuthenticationContainer>
            <SignInForm/>
            <SignupForm/>
        </AuthenticationContainer>
    )
}

export default Authentication