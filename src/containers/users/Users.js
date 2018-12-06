import { connect } from 'react-redux';
import Users from '../../components/users/Users';
import { fetchUsers } from '../../actions/users';
import { getUsers } from '../../selectors/users';

const mapStateToProps = state => ({
  users: getUsers(state)
});

const mapDispatchToProps = dispatch => ({
  fetchUsers() {
    dispatch(fetchUsers());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
