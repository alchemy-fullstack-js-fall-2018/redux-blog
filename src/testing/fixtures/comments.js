const chance = require('chance').Chance();

chance.mixin({
  comment: () => ({
    postId: chance.natural({ min: 0, max: 20 }),
    id: chance.natural({ min: 0, max: 400 }),
    name: chance.name(),
    email: chance.email(),
    body: chance.paragraph()
  }),

});

export const mockComment = () => chance.comment();

export const mockComments = Array.apply(null, { length: 100 })
  .reduce(acc => [...acc, mockComment()], []);
