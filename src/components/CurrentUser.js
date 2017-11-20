import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import keyIndex from 'react-key-index';
import './CurrentUser.scss';
import PositionNumber from './PositionNumber';

const CurrentUser = ({ auth, signOut, team, createNewTeam }) => {
  const currentUserTeam = keyIndex(team, 1);
  return (
    <div className="CurrentUser">
      <img
        className="CurrentUser--photo"
        src={auth.photoURL}
        alt={auth.displayName}
        height="50px"
        width="50px"
      />
      <p className="CurrentUser--email">
        {auth.email}
      </p>
      <p className="CurrentUser--displayName">
        {auth.displayName}
      </p>
      <div className="TeamSelection">
        <h5 className="TeamSelection__heading"> Choose Your Team </h5>
        <ul>
          <div className="container">
            <div className="row">
              {currentUserTeam.map((player, index) => {
                const positionNumber = index + 1;
                return (
                  <div>
                    <div class="col-sm">
                      <PositionNumber
                        key={player.id}
                        player={player.value}
                        positionNumber={positionNumber}
                        createNewTeam={createNewTeam}
                        team={team}
                      />
                    </div>
                    <div class="col-sm">
                      <PositionNumber
                        key={player.id}
                        player={player.value}
                        positionNumber={positionNumber}
                        createNewTeam={createNewTeam}
                        team={team}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ul>
      </div>
      <RaisedButton label="Sign Out" onClick={signOut} />
    </div>
  );
};

export default CurrentUser;
