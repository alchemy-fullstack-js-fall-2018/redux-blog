import { connect } from 'react-redux';
import UserDetails from '../components/userDetails/UserDetails';
import { getUser, isLoading } from '../selectors/Users';
import { fetchUsers } from '../actions/user';
import { loadingWithParagraph } from '../components/loading/loadingFallBack';

const mapStateToProps = ( state, props ) => ({
  user: getUser(state, parseInt(props.match.params.id)),
  loading: isLoading(state)
});

// const mapDispatchToProps = dispatch => ({
//   fetchUsers: (id) => dispatch(fetchUsers(id))
// });

// export default connect (
//   mapStateToProps,
//   mapDispatchToProps
// )(loadingWithParagraph(UserDetails));

export default connect(
  mapStateToProps
)(UserDetails);
