import React from 'react';
// import FacebookLogin from 'react-facebook-login';
import './SignInPage.scss';
// import SignIn from './SignIn';

const SignInPage = ({
  startListeningForFacebookAuthChange
}) => {
  const logInToFacebook = response => {
    startListeningForFacebookAuthChange(response);
  };

  return (
    <div className="SignInPage">
      <div className="SignInPage__wrapper">
        <div className="SignInPage__wrapper__FacebookSignIn">
          <button onClick={logInToFacebook}>Sign In With Facebook</button>
        </div>
        <div className="SignInPage__wrapper__SignIn">
          {// add google sign in button here in future if desired}
          }
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
