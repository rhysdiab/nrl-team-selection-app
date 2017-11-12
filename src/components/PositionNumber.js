import React, { Component } from 'react';
import './PositionNumber.scss';
import Player from './Player';

class PositionNumber extends Component {
  render() {
    const {
      positionNumber,
      player
    } = this.props;
    return (
      <div className="PositionNumber">
        <li>
          {positionNumber}: <Player player={player} positionNumber={positionNumber}/>
        </li>
      </div>
    );
  }
}

export default PositionNumber;
