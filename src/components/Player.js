import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import PropTypes from 'prop-types';
import ItemTypes from './ItemTypes';
import './Player.scss';

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
    const playerMoved = props.player;
    const playerDropped = monitor.getDropResult().player;

    const createNewTeam = component.props.createNewTeam;
    const initialTeam = component.props.team;
    const uid = component.props.uid;


    // updateTeam(initialTeam, playerMoved, playerDropped);
    createNewTeam(initialTeam, playerMoved, playerDropped, uid);
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
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  };

  render() {
    const {
      connectDragSource,
      isDragging,
      player
    } = this.props;
    return connectDragSource(
      <div className="player-wrapper">
        <span className="player">
          {player}
        </span>
      </div>
    );
  }
}

export default DragSource(ItemTypes.PLAYER, playerSource, collect)(Player);
