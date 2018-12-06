import { connect } from 'react-redux';
import PostDetail from '../../components/posts/PostDetail';
import { fetchPost } from '../../actions/posts';
import { fetchComments } from '../../actions/comments';
import { getPost } from '../../selectors/posts';
import { getComments } from '../../selectors/comments';

const mapStateToProps = (state, props) => ({
  post: getPost(state, props.match.params.id),
  comments: getComments(state, props.match.params.id)
});

const mapDispatchToProps = dispatch => ({
  fetchPost(id) {
    dispatch(fetchPost(id));
  },
  fetchComments(postId) {
    dispatch(fetchComments(postId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail);
