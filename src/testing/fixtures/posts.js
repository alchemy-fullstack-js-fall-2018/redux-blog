const chance = require('chance').Chance();

chance.mixin({
  post: () => ({
    id: chance.natural({ min: 0, max: 200 }),
    postId: chance.natural({ min: 0, max: 50 }),
    title: chance.sentence({ words: 5 }).slice(0, -1),
    body: chance.paragraph()
  }),

});

export const mockPost = () => chance.post();

export const mockPosts = Array.apply(null, { length: 100 })
  .reduce(acc => [...acc, mockPost()], []);
