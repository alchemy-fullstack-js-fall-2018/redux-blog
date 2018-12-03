import { connect } from 'react-redux';
import UserDetail from '../../presentational/users/UserDetail.jsx';
import { getUser } from '../../../data/state/selectors/users';
import { getPostsForUser } from '../../../data/state/selectors/posts';

const mapStateToProps = (state, props) => {
  const id = parseInt(props.match.params.id);
  return {
    user: getUser(state, id),
    posts: getPostsForUser(state, id)
  };
};

export default connect(
  mapStateToProps
)(UserDetail);
