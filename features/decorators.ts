// Decorators can be used on classes, properties, parameters, accessors, and methods

@classDecorator
class Boat {
  // Decorators cannot access property values, only the prototype
  // and key
  @testDecorator
  color: string = 'red';

  @testDecorator
  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @logError('Oops, boat was sunk') // No ending semi-colon
  pilot(@parameterDecorator speed: string): void {
    if (speed === 'fast') {
      console.log('swish');
    } else {
      console.log('The boat is not moving');
    }
  }
}

// DECORATORS
function classDecorator(constructor: Function) {
  console.log(constructor);
}

function parameterDecorator(target: any, key: string, index: number): void {
  console.log(key, index);
}

function testDecorator(target: any, key: string): void {
  console.log(key);
}

// Decorator factory: function that returns a decorator
function logError(errorMessage: string) {
  return function(target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function() {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  }
}

new Boat();
