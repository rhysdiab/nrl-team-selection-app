import { connect } from 'react-redux';
import App from '../components/App';
import { signIn, signOut } from '../actions/auth';
import { updateTeam } from '../actions/team';


const mapStateToProps = ({ auth }) => {
  return { auth };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn() { dispatch(signIn()); },
    signOut() { dispatch(signOut()); },
    updateTeam() { dispatch(updateTeam())}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
