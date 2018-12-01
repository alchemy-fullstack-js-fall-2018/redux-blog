import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from '../../lib/Input.jsx';

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 300px 300px;
  margin: 0px 15%;
`;

export default class UserForm extends PureComponent {
  static propTypes = {
    registerUser: PropTypes.func.isRequired
  };

  state = {
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
    street: '',
    suite: '',
    city: '',
    zipcode: '',
    lat: '',
    lng: '',
    companyName: '',
    motto: '',
    keywords: ''
  };

  onChange = event => {
    const { target } = event;
    console.log(target);
    this.setState({ [target.name]: target.value });
  };

  saveUser = event => {
    event.preventDefault();
    const { name, username, email, phone, website,
      street, suite, city, zipcode,
      companyName, motto, keywords
    } = this.state;
    this.props.registerUser({
      name, username, email, phone, website,
      address: {
        street, suite, city, zipcode
      },
      company: {
        name: companyName, catchPhrase: motto, bs: keywords
      }
    });
    this.props.history.push('/users');
  };

  render() {
    const {
      name, username, email, phone, website,
      street, suite, city, zipcode, lat, lng,
      companyName, motto, keywords
    } = this.state;

    return (
      <form onSubmit={this.saveUser}>

        <h3>Core Info</h3>
        <StyledDiv>
          <Input resource={name} name={'name'} onChange={this.onChange} />
          <Input resource={username} name={'username'} onChange={this.onChange} />
          <Input resource={email} name={'email'} onChange={this.onChange} />
          <Input resource={phone} name={'phone'} onChange={this.onChange} />
          <Input resource={website} name={'website'} onChange={this.onChange} />
        </StyledDiv>
        <h3>Address</h3>
        <StyledDiv>
          <Input resource={street} name={'street'} onChange={this.onChange} />
          <Input resource={suite} name={'suite'} onChange={this.onChange} />
          <Input resource={city} name={'city'} onChange={this.onChange} />
          <Input resource={zipcode} name={'zipcode'} onChange={this.onChange} />
        </StyledDiv>
        <h3>Company Info</h3>
        <StyledDiv>
          <Input resource={companyName} name={'companyName'} onChange={this.onChange} />
          <Input resource={motto} name={'motto'} onChange={this.onChange} />
          <Input resource={keywords} name={'keywords'} onChange={this.onChange} />
        </StyledDiv>

        <button type="submit">Register</button>

      </form>
    );
  }



}
