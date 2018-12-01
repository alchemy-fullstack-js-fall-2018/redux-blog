import React from 'react';
import PostListLongest from '../../container/posts/PostListLongest';

const Home = () => {

  console.log(PostListLongest);



  return (
    <section>
      <h2>Top Posts</h2>
      {PostListLongest}
    </section>
  );
};

export default Home;
