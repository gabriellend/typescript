import { ModelAttributes } from './Model';

export class Attributes<T extends {}> implements ModelAttributes<T> {
  constructor(private data: T) {}

  // get returns the specific value of a specific attribute(i.e. 'name)
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  }

  // set sets new attribute(s) on a model type
  set(update: T): void {
    Object.assign(this.data, update);
  }

  // getAll returns all attributes for a model type
  getAll = (): T => {
    return this.data;
  }
}
