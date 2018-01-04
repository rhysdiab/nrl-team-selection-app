import {
  auth,
  database,
  facebookAuthProvider,
  googleAuthProvider
} from '../firebase';
import pick from 'lodash/pick';
import { updateReduxTeam } from './team';

export const signIn = () => {
  return dispatch => {
    dispatch({ type: 'ATTEMPTING_LOGIN' });
    auth.signInWithPopup(googleAuthProvider);
  };
};

export const signInWithFacebook = () => {
  return dispatch => {
    dispatch({ type: 'ATTEMPTING_LOGIN' });
    auth.signInWithRedirect(facebookAuthProvider);
  };
};

export const signOut = () => {
  return dispatch => {
    dispatch({ type: 'ATTEMPTING_LOGIN' });
    auth.signOut();
    dispatch(signedOut());
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

//update redux teams state on sign in
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
            dispatch(updateReduxTeam(snapshot.key, snapshot.val()));
          });
        }
      }
    });
    //sign the user in
    dispatch(signedIn(user));
  };
};

export const startListeningForFacebookAuthChange = fbResponse => {
  return dispatch => {
    if (fbResponse) {
      const newResponse = { ...fbResponse };
      //convert name to displayName and picture to phoroURL in object
      const key1 = 'name';
      newResponse['displayName'] = newResponse[key1];
      delete newResponse[key1];

      const key2 = 'picture';
      newResponse['photoURL'] = newResponse[key2]['data']['url'];
      delete newResponse[key2]['data']['url'];

      const key3 = 'userID';
      newResponse['uid'] = newResponse[key3];
      delete newResponse[key3];

      dispatch(updateUserTeam(newResponse));

      database
        .ref('users')
        .child(newResponse.uid)
        .set(pick(newResponse, ['displayName', 'email', 'uid', 'photoURL']));
      database
        .ref('admins')
        .child(newResponse.uid)
        .once('value')
        .then(snapshot => {
          if (snapshot.val()) dispatch({ type: 'SET_AS_ADMIN' });
        });
    } else {
      dispatch(signedOut());
    }
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
