const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar.`;
  }
};

// This annotation is long.
const printVehicle = (vehicle: { name: string; year: number; broken: boolean; summary(): string }): void => {
  console.log(vehicle.summary());
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken? ${vehicle.broken}`);
};

printVehicle(oldCivic);

// We can do this instead:
interface Car {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
};

const printCar = (car: Car): void => {
  console.log(car.summary());
  console.log(`Year: ${car.year}`);
  console.log(`Broken? ${car.broken}`);
};

// printCar(oldCivic);

// Can also refactor like this:
interface Reportable {
  summary(): string;
}

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);

// Can call the same function on a totally different object now.
printSummary(drink);