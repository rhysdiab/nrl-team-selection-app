import { connect } from 'react-redux';
import App from '../components/App';
import { signIn, signInWithFacebook, signOut, startListeningForFacebookAuthChange } from '../actions/auth';
import { createNewTeam } from '../actions/team';


const mapStateToProps = ({ auth, startListeningForFacebookAuthChange, teams }) => {
  return { auth, teams };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn() { dispatch(signIn()); },
    signInWithFacebook() { dispatch(signInWithFacebook) },
    signOut() { dispatch(signOut()); },
    startListeningForFacebookAuthChange(response) { dispatch(startListeningForFacebookAuthChange(response)) },
    createNewTeam(initialTeam, playerMoved, playerDropped, uid) { dispatch(createNewTeam(initialTeam, playerMoved, playerDropped, uid))}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
