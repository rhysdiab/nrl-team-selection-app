import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import PropTypes from 'prop-types';
import ItemTypes from './ItemTypes';

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
  constructor(props) {
    super(props);
    this.state = {value: this.props.positionNumber};

    this.handleClick = this.handleClick.bind(this);
  }

  static propTypes = {
    player: PropTypes.string.isRequired,

    // Injected by React DnD:
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  };

  handleClick() {
    console.log('handle click');
  }

  render() {
    const { connectDragSource, isDragging, player } = this.props;
    return connectDragSource(
      <span>
        <button onClick={(e) => this.handleClick(e)}>{player} </button>
      </span>
    );
  }
}

export default DragSource(ItemTypes.PLAYER, playerSource, collect)(Player);
