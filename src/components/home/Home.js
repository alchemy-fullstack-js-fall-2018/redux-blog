import React, { Component } from 'react';
import { fetchPostsPromise } from '../../actions/posts';

export default class Home extends Component {



  // componentDidMount() {
  //   fetchPostsPromise();
  // }

  render() {
    return (
      <div>
        <h1>Hello!</h1>
      </div>
    );
  }
}
