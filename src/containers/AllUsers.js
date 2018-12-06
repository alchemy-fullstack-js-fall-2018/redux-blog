import { connect } from 'react-redux';
import Users from '../components/users/Users';
import { getUsers } from '../selectors/Users';
import { fetchUsers } from '../actions/user';

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
