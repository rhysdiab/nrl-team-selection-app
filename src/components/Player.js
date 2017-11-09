import React from 'react';

const Player = ({playerNumber, player}, props) => {
  return (
      <li> {playerNumber}: {player} </li>
  );
};

export default Player;
