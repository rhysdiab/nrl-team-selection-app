import { auth, database, googleAuthProvider } from '../firebase';
import pick from 'lodash/pick';
import { updateReduxTeam } from './team';

export const signIn = () => {
  return dispatch => {
    dispatch({ type: 'ATTEMPTING_LOGIN' });
    auth.signInWithPopup(googleAuthProvider);
  };
};

export const signOut = () => {
  return dispatch => {
    dispatch({ type: 'ATTEMPTING_LOGIN' });
    auth.signOut();
  };
};

const signedIn = user => {
  return {
    type: 'SIGN_IN',
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL,
    uid: user.uid
  };
};

const signedOut = () => {
  return {
    type: 'SIGN_OUT'
  };
};

const updateUserTeam = user => {
  return dispatch => {
    //update team state on sign in
    const teamsRef = database.ref('teams');
    teamsRef.once('value').then(snapshot => {
      for (var prop in snapshot.val()) {
        if (snapshot.val()[prop].uid === user.uid) {
          const currentTeamKey = prop;
          const currentTeamRef = database.ref('teams/' + currentTeamKey);
          currentTeamRef.once('value').then(snapshot => {
            console.log('updating state');
            dispatch(updateReduxTeam(snapshot.key, snapshot.val()));
          });
        }
      }
    });
    dispatch(signedIn(user));
  };
};

export const startListeningToAuthChanges = () => {
  return dispatch => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(updateUserTeam(user));
        database
          .ref('users')
          .child(user.uid)
          .set(pick(user, ['displayName', 'email', 'uid', 'photoURL']));
        database.ref('admins').child(user.uid).once('value').then(snapshot => {
          if (snapshot.val()) dispatch({ type: 'SET_AS_ADMIN' });
        });
      } else {
        dispatch(signedOut());
      }
    });
  };
};
