import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PositionNumber.scss';
import Player from './Player';
import { DropTarget } from 'react-dnd';
import ItemTypes from './ItemTypes';

const positionTarget = {
  drop(props) {
    return props;
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class PositionNumber extends Component {
  static propTypes = {
    createNewTeam: PropTypes.func.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    player: PropTypes.string.isRequired,
    positionNumber: PropTypes.number.isRequired,
    team: PropTypes.array.isRequired,
    uid: PropTypes.string.isRequired
  };

  render() {
    const {
      createNewTeam,
      connectDropTarget,
      isOver,
      player,
      positionNumber,
      reservePlayer,
      team,
      uid
    } = this.props;
    return connectDropTarget(
      <div className="PositionNumber">
        <div className="container">
          <div className="row">
            <div className="position-wrapper">
              {positionNumber}
            </div>

              <Player
                player={player}
                createNewTeam={createNewTeam}
                team={team}
                uid={uid}
                isOver={isOver}
                reservePlayer={reservePlayer}
              />
          </div>
        </div>
      </div>
    );
  }
}

export default DropTarget(ItemTypes.PLAYER, positionTarget, collect)(
  PositionNumber
);
