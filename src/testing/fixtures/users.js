const chance = require('chance').Chance();

chance.mixin({
  user: () => ({
    id: chance.natural({ min: 0, max: 20 }),
    name: chance.name(),
    username: chance.word({ length: 8 }),
    email: chance.email(),
    address: {
      street: chance.street(),
      suite: `${chance.pickone(['Suite', 'Apt'])} ${chance.natural({ min: 100, max: 999 })}`,
      city: chance.city(),
      zipcode: chance.zip({ plusfour: true }),
      geo: {
        lat: chance.latitude(),
        lng: chance.longitude()
      }
    },
    phone: `${chance.phone()}${chance.pickone(['', ` x${chance.natural({ min:100, max: 99999 })}`])}`,
    website: chance.domain(),
    company: {
      name: chance.company(),
      catchPhrase: chance.sentence({ words: 5 }).slice(0, -1),
      bs: `${chance.word()} ${chance.word()} ${chance.word()}`
    }
  }),

});

export const mockUser = () => chance.user();

export const mockUsers = Array.apply(null, { length: 100 })
  .reduce(acc => [...acc, mockUser()], []);
