import React, { Component } from 'react';
import SignIn from '../../Components/SignIn';
import SignUpPage from "./SignUpPage";

/**
 * SignIN page
 */
class SignInPage extends Component {
    render() {
        return (
            <div>
                <SignIn/>
                <br/>
                <p> Or Create Account </p>
                <SignUpPage/>
            </div>
        );
    }
};
export default SignInPage;