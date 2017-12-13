import { connect } from 'react-redux';
import App from '../components/App';
import { signIn, signInWithFacebook, signOut } from '../actions/auth';
import { createNewTeam } from '../actions/team';


const mapStateToProps = ({ auth, teams }) => {
  return { auth, teams };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn() { dispatch(signIn()); },
    signInWithFacebook() { dispatch(signInWithFacebook) },
    signOut() { dispatch(signOut()); },
    createNewTeam(initialTeam, playerMoved, playerDropped, uid) { dispatch(createNewTeam(initialTeam, playerMoved, playerDropped, uid))}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
