import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import PropTypes from 'prop-types';
import ItemTypes from './ItemTypes';

const playerSource = {
  beginDrag(props) {
    return {
      player: props.player,
    };
  },

  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }

    const playerMoved = props.player;
    const playerDropped = monitor.getDropResult().player;

    console.log(playerMoved, playerDropped);
    //TODO create update team action which takes in the player moved and player dropped
    //and returns a new team array
  }
};

/**
 * Specifies the props to inject into your component.
 */
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class Player extends Component {
  static propTypes = {
    player: PropTypes.string.isRequired,

    // Injected by React DnD:
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  };

  render() {
    const {
      connectDragSource,
      isDragging,
      player,
    } = this.props;
    return connectDragSource(
      <span>
        {player}
      </span>
    );
  }
}

export default DragSource(ItemTypes.PLAYER, playerSource, collect)(Player);
