import { connect } from 'react-redux';
import { getPost } from '../selectors/posts';
import { getComments } from '../selectors/comments';
import { fetchComments } from '../actions/comments';
import { fetchPosts } from '../actions/posts';
import PostDetail from '../components/posts/PostDetail';


const mapStateToProps = (state, props) => ({
  post: getPost(state, parseInt(props.match.params.id)),
  comments: getComments(state)
});

const mapDispatchToProps = dispatch => ({
  fetchComments: (id) => dispatch(fetchComments(id)),
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail);
