// Tuples represent a specific record of something, like an object.
// const drink = {
//   color: 'brown',
//   carbonated: true,
//   sugar: 40
// };

// Alias
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40]; // === const pepsi: [string, boolean, number] = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

// We don't use tuples that often because it's hard to understand them.
const carSpecs: [number, number] = [400, 3354]; // <--- Not clear what these numbers mean

// Much clearer
const carStats = {
  horsepower: 400,
  weight: 3354
};