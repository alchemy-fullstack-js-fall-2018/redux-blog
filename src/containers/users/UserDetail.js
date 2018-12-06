import { connect } from 'react-redux';
import UserDetail from '../../components/users/UserDetail';
import { fetchUser } from '../../actions/users';
import { getUser } from '../../selectors/users';

const mapStateToProps = (state, props) => ({
  user: getUser(state, props.match.params.id),
});

const mapDispatchToProps = dispatch => ({
  fetchUser(id) {
    dispatch(fetchUser(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetail);
