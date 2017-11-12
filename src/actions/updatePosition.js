
export const updatePosition = (user) => {
  return {
    type: 'UPDATE_POSITION',
    displayName: user.displayName,
    uid: user.uid,
    photoURL: user.photoURL
  };
};

export default updatePosition;
