import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import UserCard from './UserCard.jsx';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

export default class UserList extends PureComponent {

  static propTypes = {
    users: PropTypes.array.isRequired,
    fetchUsers: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { users } = this.props;
    const userList = users.map(user => {
      return (
        <UserCard
          key={user.id}
          user={user}
        />
      );
    });

    return (
      <div>
        <StyledDiv>
          {userList}
        </StyledDiv>
      </div>
    );

  }
}
