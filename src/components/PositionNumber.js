import React, { Component } from 'react';
import './PositionNumber.scss';
import Player from './Player';
import { DropTarget } from 'react-dnd';
import ItemTypes from './ItemTypes';
import movePlayer from '../actions/movePlayer';

const positionTarget = {
  drop(props) {
    movePlayer(props.y);
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
      y
    } = this.props;
    return connectDropTarget(
      <div className="PositionNumber">
        <li>
          {positionNumber}: <Player player={player} />
        </li>
      </div>
    );
  }
}

export default DropTarget(ItemTypes.PLAYER, positionTarget, collect)(PositionNumber);
