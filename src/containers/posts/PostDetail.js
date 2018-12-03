import { connect } from 'react-redux';
import PostDetail from '../../components/posts/PostDetail';
import { getPosts } from '../../selectors/posts';
import { fetchPost } from '../../actions/posts';

const mapStateToProps = state => ({
  post: getPosts(state)[0] || {}
});

const mapDispatchToProps = dispatch => ({
  fetchPost(id) {
    dispatch(fetchPost(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail);
