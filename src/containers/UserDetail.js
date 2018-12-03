import { connect } from 'react-redux';
import UserDetail from '../components/users/UserDetail';
import { getUser } from '../selectors/users';
import { getPostsForUser } from '../selectors/posts';

const mapStateToProps = (state, props) => {
  return {
    user: getUser(state, parseInt(props.match.params.id)),
    posts: getPostsForUser(state, parseInt(props.match.params.id))
  };
};

export default connect(
  mapStateToProps
)(UserDetail);
