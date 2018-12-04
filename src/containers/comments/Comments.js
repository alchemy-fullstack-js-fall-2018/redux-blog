import { connect } from 'react-redux';
import Comments from '../../components/comments/Comments';
import { getComments } from '../../selectors/comments';
import { fetchComments } from '../../actions/comments';
import { loadingWithParagraph } from '../../components/loading/LoadingFallback';

const mapStateToProps = (state) => ({
  comments: getComments(state)
});

const mapDispatchToProps = dispatch => ({
  fetchComments: (postId) => {
    dispatch(fetchComments(postId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(loadingWithParagraph(Comments));
