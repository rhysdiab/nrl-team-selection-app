import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import initialState from '../initial-state';
import { DragSource } from 'react-dnd';
import map from 'lodash/map';
import './CurrentUser.scss';
import Player from './Player';

const CurrentUser = ({ auth, signOut }) => {
  const currentUserTeam = initialState.teams.players;
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
        {map(currentUserTeam, (player, key) =>
          <ul>
            <Player key={key} playerNumber={key} player={player} />
          </ul>
        )}
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
