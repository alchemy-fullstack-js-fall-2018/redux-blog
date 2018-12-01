import { connect } from 'react-redux';
import Users from '../components/users/Users';
import { getUsers } from '../selectors/users';
import { fetchUsers } from '../actions/users';

const mapStateToProps = state => ({
  users: getUsers(state)
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
