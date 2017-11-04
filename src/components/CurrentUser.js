import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import './CurrentUser.scss';

const CurrentUser = ({ auth, signOut }) => {
  return (
    <div className="CurrentUser">
      <img
        className="CurrentUser--photo"
        src={ auth.photoURL }
        alt={ auth.displayName }
      />
      <div className="CurrentUser--identification">
        <h3 className="CurrentUser--displayName">{ auth.displayName }</h3>
        <p className="CurrentUser--email">{ auth.email }</p>
          <RaisedButton label="Sign Out" onClick={signOut} />
      </div>
    </div>
  );
};

export default CurrentUser;
