import React from 'react';
import './SignInPage.scss';
import SignIn from './SignIn';

const SignInPage = ({ signIn }) => {
  return (
    <div className="SignInPage">
      <SignIn signIn={signIn} />
    </div>
  );
};

export default SignInPage;
