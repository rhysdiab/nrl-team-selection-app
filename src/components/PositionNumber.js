import React, { Component } from 'react';
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
  render() {
    const {
      createNewTeam,
      connectDropTarget,
      isOver,
      player,
      positionNumber,
      team
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
