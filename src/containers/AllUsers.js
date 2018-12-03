import { connect } from 'react-redux';
import { getUsers } from '../selectors/users';
import { fetchUsers } from '../actions/users';
import UserList from '../components/users/UserList';

const mapStateToProps = state => ({
  users: getUsers(state)
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);

