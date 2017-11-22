import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import keyIndex from 'react-key-index';
import './CurrentUser.scss';
import PositionNumber from './PositionNumber';

const CurrentUser = ({ auth, signOut, team, createNewTeam }) => {
  const style = {
    backgroundColor: "#B80002"
  }

  const currentUserTeam = keyIndex(team, 1);
  return (
    <div className="CurrentUser">
    <AppBar style={style}/>
      <div className="TeamSelection">
        <h5 className="TeamSelection__heading"> {auth.displayName}&apos; s Team </h5>
        <div className="container">
          <div className="row">
            <div class="col-">
              <div className="TeamSelection__panel-1 team-panel">
                {currentUserTeam.map((player, index) => {
                  const positionNumber = index + 1;
                  while (positionNumber <= 13) {
                    return (
                      <div>
                        <PositionNumber
                          key={player.id}
                          player={player.value}
                          positionNumber={positionNumber}
                          createNewTeam={createNewTeam}
                          team={team}
                        />
                      </div>
                    );
                  }
                })}
              </div>
            </div>
            <div class="col-">
              <div className="TeamSelection__panel-1 team-panel">
                {currentUserTeam.map((player, index) => {
                  const positionNumber = index + 1;
                  while (positionNumber > 13) {
                    return (
                      <div>
                        <PositionNumber
                          key={player.id}
                          player={player.value}
                          positionNumber={positionNumber}
                          createNewTeam={createNewTeam}
                          team={team}
                        />
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sign-out-button">
        <RaisedButton label="Sign Out" onClick={signOut} />
      </div>
    </div>
  );
};

export default CurrentUser;
