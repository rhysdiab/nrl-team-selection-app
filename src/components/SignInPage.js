import React from 'react';
import FacebookLogin from 'react-facebook-login';
import './SignInPage.scss';
import SignIn from './SignIn';

const SignInPage = ({ signIn }) => {
  return (
    <div className="SignInPage">
      <div className="SignInPage__wrapper">
        <div className="SignInPage__wrapper__SignIn">
          <SignIn signIn={signIn} />
        </div>
        <div className="SignInPage__wrapper__FacebookSignIn">
          <FacebookLogin
            appId="1088597931155576"
            autoLoad={true}
            fields="name,email,picture"
            onClick={''}
            callback={'responseFacebook'}
          />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
