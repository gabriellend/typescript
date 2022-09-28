const carMakers = ['ford', 'toyota', 'chevy'];
// If initializing empty string, include the annotation.
const cars: string[] = [];
const dates = [new Date(), new Date()];

const carsByMaker = [
  ['f150'],
  ['corolla'],
  ['camaro']
];

// Help with inference when extracting values
// const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100);

// Autocomplete help with 'map', etc.
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());
