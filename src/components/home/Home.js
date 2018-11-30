import React from 'react';

export default function Home({ posts }) {
  return (
    <div>
      <h1>Five Longest Posts!</h1>
      <h4>{ posts }</h4>
    </div>
  );
}
