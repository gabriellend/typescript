class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

// Condenses the above two into one
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const num = new ArrayOfAnything([1, 2, 3]); // type inference
new ArrayOfAnything<string>(['a', 'b', 'c']);

// EXMAPLE OF GENERICS WITH FUNCTIONS
function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// Condenses the above two into one
function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything([1, 2, 3]); // type inference
printAnything<string>(['a', 'b', 'c']); // Best to always include the generic

// GENERIC CONSTRAINS
// class Boat {
//   print(){
//     console.log('I am a boat');
//   }
// }

class House {
  print() {
    console.log('I am a house');
  }
}

interface Printable { // <---
  print(): void;
}

// Printable constrains what types can be fed to printBoatsOrHouses.
function printBoatsOrHouses<T extends Printable>(arr: T[]): void { 
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

// printBoatsOrHouses([1, 2, 3]); // Does not satisfy the constraint of Printable
printBoatsOrHouses<House>([new House(), new House(), new House()])
