import React, { Component } from 'react';
import './PositionNumber.scss';

class PositionNumber extends Component {
  render() {
    return (
      <div className="PositionNumber">
        {this.props.children}
      </div>
    );
  }
}

export default PositionNumber;
