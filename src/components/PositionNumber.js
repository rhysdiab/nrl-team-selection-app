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
      connectDropTarget,
      isOver,
      positionNumber,
      player,
      updateTeam
    } = this.props;
    return connectDropTarget(
      <div className="PositionNumber">
        <li>
          {positionNumber}: <Player player={player} updateTeam={updateTeam} />
        </li>
      </div>
    );
  }
}

export default DropTarget(ItemTypes.PLAYER, positionTarget, collect)(PositionNumber);
