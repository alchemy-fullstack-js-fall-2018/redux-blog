import React, { Fragment } from 'react';

export default function Comment({ comment }) {
  return (
    <Fragment>
      <h5>{comment.name}: {comment.email}</h5>
      <p>{comment.body}</p>
      <br />
    </Fragment>
  );
}
