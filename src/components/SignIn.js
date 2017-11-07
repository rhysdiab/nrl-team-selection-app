import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import './SignIn.scss';

const SignIn = ({signIn}) => {
  return (
    <div className="hello">
      <RaisedButton label="Sign In" onClick={signIn} />
    </div>
  );
};

export default SignIn;
