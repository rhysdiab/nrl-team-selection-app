import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import './SignIn.scss';
import Button from 'react-bootstrap/lib/Button';

const SignIn = ({ signIn }) => {
  return (
    <div className="hello">
      <Row className="show-grid">
        <Col xs={12} md={8}>
          <code>
            &lt;{'Col xs={12} md={8}'} /&gt;
          </code>
        </Col>
        <Col xs={6} md={4}>
          <code>
            &lt;{'Col xs={6} md={4}'} /&gt;
          </code>
        </Col>
      </Row>
      <RaisedButton label="Sign In" onClick={signIn} />
    </div>
  );
};

export default SignIn;
