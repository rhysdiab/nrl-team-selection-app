import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const SignIn = ({signIn}) => {
  return (
    <div>
      <RaisedButton label="Sign In" onClick={signIn} />
    </div>
  );
};

export default SignIn;
