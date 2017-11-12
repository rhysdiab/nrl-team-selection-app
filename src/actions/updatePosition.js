
export const updatePosition = (positionNumber) => {
  console.log(positionNumber);
  return {
    type: 'UPDATE_POSITION',
    positionNumber: positionNumber++
  };
};

export default updatePosition;
