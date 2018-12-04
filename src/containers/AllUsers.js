import { connect } from 'react-redux';
import Users from '../components/users/Users';
import { getUsers } from '../selectors/users';
import { fetchUsers } from '../actions/users';
import { loadingWithParagraph } from '../components/loading/LoadingFallback';

const mapStateToProps = state => ({
  users: getUsers(state)
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(loadingWithParagraph(Users));
