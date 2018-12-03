import { connect } from 'react-redux';
import Users from '../components/users/Users';
import { getUsers } from '../selectors/users';
import { fetchUsersPromise } from '../actions/users';

const mapStateToProps = state => ({
  users: getUsers(state)
});

const mapDispatchToProps = dispatch => ({
  fetchUsersPromise: () => {
    dispatch(fetchUsersPromise());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
