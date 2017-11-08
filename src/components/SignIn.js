import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import './SignIn.scss';

const SignIn = ({ signIn }) => {
  return (
    <div className="hello">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="my-scss-test">
              <RaisedButton label="Sign In" onClick={signIn} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
