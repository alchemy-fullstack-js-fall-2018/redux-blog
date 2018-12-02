import { connect } from 'react-redux';
import UserDetail from '../components/users/Users';
import { getUsers } from '../selectors/users';
import {  } from '../actions/posts';

const mapStateToProps = state => ({
  user: ,
  fetchPosts:
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPs())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);