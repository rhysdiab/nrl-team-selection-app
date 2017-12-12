import React from 'react';
import { FacebookLogin } from 'react-facebook-login-component';
import './SignInPage.scss';
import SignIn from './SignIn';

const SignInPage = ({ signIn }) => {
  return (
    <div className="SignInPage">
      <SignIn signIn={signIn} />
      <FacebookLogin socialId="yourAppID"
                       language="en_US"
                       scope="public_profile,email"
                       responseHandler={this.responseFacebook}
                       xfbml={true}
                       fields="id,email,name"
                       version="v2.5"
                       className="facebook-login"
                       buttonText="Login With Facebook"/>
    </div>
  );
};

export default SignInPage;
