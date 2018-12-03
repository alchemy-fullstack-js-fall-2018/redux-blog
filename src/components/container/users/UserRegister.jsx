import { connect } from 'react-redux';
import UserForm from '../../presentational/users/UserForm.jsx';
import { registerUser } from '../../../data/state/actions/users';

const mapDispatchToProps = dispatch => ({
  registerUser: user => dispatch(registerUser(user))
});

export default connect(
  null, mapDispatchToProps
)(UserForm);
