import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import keyIndex from 'react-key-index';
import initialState from '../initial-state';
import './CurrentUser.scss';
import PositionNumber from './PositionNumber';

const CurrentUser = ({ auth, signOut, updateTeam }) => {
  const currentUserTeamOriginal = initialState.team;
  const currentUserTeam = keyIndex(currentUserTeamOriginal, 1);
  return (
    <div className="CurrentUser">
      <img
        className="CurrentUser--photo"
        src={auth.photoURL}
        alt={auth.displayName}
        height="50px"
        width="50px"
      />
      <div>
        <h5> Choose Your Team </h5>
        <ul>
          {currentUserTeam.map((player, index) => {
            const positionNumber = index + 1;
            return (
              <PositionNumber
                key={player.id}
                player={player.value}
                positionNumber={positionNumber}
                updateTeam={updateTeam}
              />
            );
          })}
        </ul>
      </div>
      <div className="CurrentUser--identification">
        <h3 className="CurrentUser--displayName">
          {auth.displayName}
        </h3>
        <p className="CurrentUser--email">
          {auth.email}
        </p>
        <RaisedButton label="Sign Out" onClick={signOut} />
      </div>
    </div>
  );
};

export default CurrentUser;
