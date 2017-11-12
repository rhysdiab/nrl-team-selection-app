import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import PropTypes from 'prop-types';
import ItemTypes from './ItemTypes';
import updatePosition from '../actions/updatePosition';

const playerSource = {
  beginDrag(props) {
    return {
      player: props.player
    };
  },

  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }
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

  handleClick = () => {
    console.log('handle click called');
    updatePosition(this.props.positionNumber);
  }
  render() {
    const { connectDragSource, isDragging, player, positionNumber } = this.props;
    return connectDragSource(
      <span>
        <button onClick={this.handleClick}>{player} </button>
      </span>
    );
  }
}

export default DragSource(ItemTypes.PLAYER, playerSource, collect)(Player);
