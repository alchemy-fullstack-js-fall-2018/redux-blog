import { connect } from 'react-redux';
import UserDetails from '../components/userDetails/UserDetails';
import { getUsers, isLoading } from '../selectors/Users';
import { fetchUsers } from '../actions/user';
import { loadingWithParagraph } from '../components/loading/loadingFallBack';

const mapStateToProps = state => ({
  users: getUsers(state)[0] || {},
  loading: isLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: (id) => dispatch(fetchUsers(id))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(loadingWithParagraph(UserDetails));
