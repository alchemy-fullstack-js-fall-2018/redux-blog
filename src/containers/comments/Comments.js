import { connect } from 'react-redux';
import Comments from '../../components/comments/Comments';
import { getComments } from '../../selectors/comments';
import { fetchComments } from '../../actions/comments';

const mapStateToProps = (state) => ({
  comments: getComments(state)
});

const mapDispatchToProps = dispatch => ({
  fetchComments: (postId) => {
    console.log('id in mapDispatchToProps', postId);
    console.log('function', fetchComments);
    dispatch(fetchComments(postId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
