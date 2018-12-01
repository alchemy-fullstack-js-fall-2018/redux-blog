import { connect } from 'react-redux';
import UserList from '../../presentational/users/UserList.jsx';
import { getUsers } from '../../../data/state/selectors/users';
import { fetchUsers } from '../../../data/state/actions/users';

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
