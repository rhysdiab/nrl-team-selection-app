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

    this.updatePosition = this.updatePosition.bind(this);
  }

  updatePosition(e) {
    console.log(e);
  }

  static propTypes = {
    player: PropTypes.string.isRequired,

    // Injected by React DnD:
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  };

  render() {
    const { connectDragSource, isDragging, player, positionNumber } = this.props;
    return connectDragSource(
      <span>
        {player} <input type="text" name="Move To Number" defaultValue={positionNumber} onChange={this.updatePosition}/>
      </span>
    );
  }
}

export default DragSource(ItemTypes.PLAYER, playerSource, collect)(Player);
