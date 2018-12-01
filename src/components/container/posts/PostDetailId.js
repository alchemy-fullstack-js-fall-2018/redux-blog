import { connect } from 'react-redux';
import PostDetail from '../../presentational/posts/PostDetail.jsx';
import { getPost } from '../../../data/state/selectors/posts';

const mapStateToProps = (state, props) => ({
  post: getPost(state, props.match.params.id)
});

export default connect(
  mapStateToProps
)(PostDetail);
