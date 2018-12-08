import { connect } from 'react-redux';
import Users from '../components/users/Users';
import { getUsers, isLoading } from '../selectors/Users';
import { fetchUsers } from '../actions/user';
import { loadingWithParagraph } from '../components/loading/loadingFallBack';

const mapStateToProps = state => ({
  users: getUsers(state),
  loading: isLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(loadingWithParagraph(Users));
