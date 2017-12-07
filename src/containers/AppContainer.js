import { connect } from 'react-redux';
import App from '../components/App';
import { signIn, signOut } from '../actions/auth';
import { createNewTeam } from '../actions/team';


const mapStateToProps = ({ auth, teams }) => {
  return { auth, teams };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn() { dispatch(signIn()); },
    signOut() { dispatch(signOut()); },
    createNewTeam(initialTeam, playerMoved, playerDropped, uid) { dispatch(createNewTeam(initialTeam, playerMoved, playerDropped, uid))}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
