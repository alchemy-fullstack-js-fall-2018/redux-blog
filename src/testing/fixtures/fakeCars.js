import uuid from 'uuid/v4';
const chance = require('chance').Chance();

chance.mixin({
  car: () => ({
    plate: chance.string({ length: 6, pool: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789' }),
    make: chance.pickone(['Toyota', 'Ford', 'Chevrolet', 'Subaru', 'Tesla']),
    model: chance.animal(),
    inLot: chance.bool({ likelihood: 30 }),
    lotUses: chance.natural({ min: 0, max: 20 })
  }),
  newCar: () => ({
    plate: chance.string({ length: 6, pool: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789' }),
    make: chance.pickone(['Toyota', 'Ford', 'Chevrolet', 'Subaru', 'Tesla']),
    model: chance.animal(),
    inLot: false,
    lotUses: 0
  }),

});

export const fakeCar = () => chance.car();

export const fakeCarWithId = () => ({ [uuid()]: chance.car() });

export const fakeCarNew = () => {
  let car = chance.newCar();
  car.inLot = false;
  car.lotUses = 0;
  return car;
};

export const fakeCarNewWithId = () => {
  let car = chance.newCar();
  car.inLot = false;
  car.lotUses = 0;
  return { [uuid()]: car };
};

export const fakeCars = Array.apply(null, { length: 100 })
  .reduce(acc => {({ ...acc, ...fakeCarWithId() }); }, {});
