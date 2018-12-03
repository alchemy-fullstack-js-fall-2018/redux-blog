import { connect } from 'react-redux';
import Users from '../components/users/Users';
import UserDetails from '../components/userDetails/UserDetails';
import { getUsers, getSearchTerm } from '../selectors/Users';

const mapStateToProps = state => ({
  users: getUsers(state)
});


export default connect(
  mapStateToProps
)(Users);
