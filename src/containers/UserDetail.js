import { connect } from 'react-redux';
import UserDetail from '../components/users/UserDetail';
import { getUsers } from '../selectors/users';
import { fetchUser } from '../actions/users';
import { loadingWithParagraph } from '../components/loading/LoadingFallback';

const mapStateToProps = state => ({
  user: getUsers(state)[0] || {}
});

const mapDispatchToProps = dispatch => ({
  fetchUser(id) {
    dispatch(fetchUser(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(loadingWithParagraph(UserDetail));
