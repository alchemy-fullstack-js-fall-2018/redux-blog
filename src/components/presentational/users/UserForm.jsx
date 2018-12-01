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
    registerCar: PropTypes.func.isRequired
  };

  state = {
    plate: '',
    make: '',
    model: ''
  };

  onChange = event => {
    const { target } = event;
    this.setState({ [target.name]: target.value });
  };

  saveCar = event => {
    event.preventDefault();
    const { plate, make, model } = this.state;
    this.props.registerCar({ plate, make, model });
    this.props.history.push('/cars');
  };


  render() {
    const { plate, make, model } = this.state;

    return (
      <form onSubmit={this.saveCar}>
        <StyledDiv>
          <label htmlFor="plate">Plate</label>
          <input
            name="plate" type="text"
            value={plate} onChange={this.onChange}
          ></input>

          <label htmlFor="make">Make</label>
          <input
            name="make" type="text"
            value={make} onChange={this.onChange}
          ></input>

          <label htmlFor="model">Model</label>
          <input
            name="model" type="text"
            value={model} onChange={this.onChange}
          ></input>
        </StyledDiv>

        <button type="submit">Register</button>

      </form>
    );
  }



}
