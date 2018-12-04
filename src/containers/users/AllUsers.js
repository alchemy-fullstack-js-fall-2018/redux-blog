import { connect } from 'react-redux';
import Users from '../../components/users/Users';
import { getUsers } from '../../selectors/users';

const mapStateToProps = state => ({
  users: getUsers(state)
});

export default connect(mapStateToProps)(Users);
