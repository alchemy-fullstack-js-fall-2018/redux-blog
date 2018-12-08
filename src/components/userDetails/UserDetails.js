import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class UserDetails extends PureComponent {

  static propTypes = {
    user: PropTypes.object.isRequired,

  }

//   componentDidMount() {
//     this.props.fetchUser(this.props.match.params.id);
// }

  render() {
    const { name, username, email, id } = this.props.user;

    return (
      <Fragment>
        <h3>User Details</h3>
        <h3>{id}</h3>
        <h3>Name: {name}</h3>
        <h3>Username: {username}</h3>
        <h3>Email: {email}</h3>
      </Fragment>
    );
}
}
