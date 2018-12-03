import { connect } from 'react-redux';
import PostDetails from '../components/postDetails/PostDetails';
import { getSearchTerm } from '../selectors/Users';

const mapStateToProps = state => ({
  searchTerm: getSearchTerm(state)
});

export default connect(
  mapStateToProps
)(PostDetails);
