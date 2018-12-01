import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 300px 300px;
  margin: 0px 15%;

  label {
    justify-self: end;
    margin: 5px;
  }
  input {
    justify-self: start;
    margin: 5px;
  }
  input[type=text] {
    width: 100%;
  }
  select {
    justify-self: start;
    margin: 5px;
  }
`;

export default class UserForm extends PureComponent {
  static propTypes = {
    registerUser: PropTypes.func.isRequired
  };

  state = {
    name: '',
    username: '',
    email: '',
    address: '',
    phone: '',
    website: '',
    company: ''
  };

  onChange = event => {
    const { target } = event;
    this.setState({ [target.name]: target.value });
  };

  saveUser = event => {
    event.preventDefault();
    const { name, username, email } = this.state;
    this.props.registerUser({ name, username, email });
    this.props.history.push('/users');
  };

  render() {
    const {
      name, username, email,
      // address, phone, website, company
    } = this.state;

    return (
      <form onSubmit={this.saveUser}>
        <StyledDiv>
          <label htmlFor="name">Name</label>
          <input
            name="name" type="text"
            value={name} onChange={this.onChange}
          ></input>

          <label htmlFor="username">Username</label>
          <input
            name="username" type="text"
            value={username} onChange={this.onChange}
          ></input>

          <label htmlFor="email">Email</label>
          <input
            name="email" type="text"
            value={email} onChange={this.onChange}
          ></input>
        </StyledDiv>

        <button type="submit">Register</button>

      </form>
    );
  }



}
