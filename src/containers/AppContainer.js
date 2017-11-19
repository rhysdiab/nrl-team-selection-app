import { connect } from 'react-redux';
import App from '../components/App';
import { signIn, signOut } from '../actions/auth';
import { createNewTeam } from '../actions/team';


const mapStateToProps = ({ auth, team }) => {
  return { auth, team };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn() { dispatch(signIn()); },
    signOut() { dispatch(signOut()); },
    createNewTeam(initialTeam, playerMoved, playerDropped) { dispatch(createNewTeam(initialTeam, playerMoved, playerDropped))}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
