import { connect } from 'react-redux';
import PostDetail from '../../presentational/posts/PostDetail.jsx';
import { getPost } from '../../../data/state/selectors/posts';
import { getComments } from '../../../data/state/selectors/comments';
import { fetchComments } from '../../../data/state/actions/comments';

const mapStateToProps = (state, props) => ({
  post: getPost(state, parseInt(props.match.params.id)),
  comments: getComments(state)
});

const mapDispatchToProps = dispatch => ({
  fetchComments: id => dispatch(fetchComments(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail);
