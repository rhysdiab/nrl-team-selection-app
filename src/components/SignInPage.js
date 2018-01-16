import React from 'react';
import FacebookLogin from 'react-facebook-login';
import './SignInPage.scss';
import SignIn from './SignIn';

const SignInPage = ({
  auth,
  signIn,
  signInWithFacebook,
  startListeningForFacebookAuthChange
}) => {
  const responseFacebook = response => {
    startListeningForFacebookAuthChange(response);
  };

  return (
    <div className="SignInPage">
      <div className="SignInPage__wrapper">
        <div className="SignInPage__wrapper__FacebookSignIn">
          <FacebookLogin
            appId="516067968764277"
            autoLoad={true}
            fields="name,email,picture"
            scope="public_profile,user_friends,user_actions.books"
            onClick={signInWithFacebook}
            callback={responseFacebook}
          />
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
