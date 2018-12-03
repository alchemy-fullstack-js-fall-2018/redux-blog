import { connect } from 'react-redux';
import Comments from '../../components/comments/Comments';
import { getComments } from '../../selectors/comments';
import { fetchComments } from '../../actions/comments';

const mapStateToProps = (state) => ({
  posts: getComments(state)
});

const mapDispatchToProps = dispatch => ({
  fetchComments(id) {
    dispatch(fetchComments(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
