class Vehicle {
  constructor(public color: string) {}

  protected honk(): void { // Can only call this method from inside the Vehicle class or inside one of its children.**
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);


class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void { // Can only call this method from inside the Car class.*
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive(); // <--- *
    this.honk(); // <--- **
  }
}

const car = new Car(4, 'red');
car.startDrivingProcess();
// car.honk(); // Cannot call honk here because it is not public.