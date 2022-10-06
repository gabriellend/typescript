import axios, { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';

export class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(
    public rootURL: string, 
    public deserialize: (json: K) => T
  ) {}

  on = this.events.on;
  trigger = this.events.trigger;

  fetchOne(id: number): void {
    console.log("Models:", this.models);
    console.log("Length of models:", this.models.length);

   for (let i = 0; i < this.models.length; i++) {
    console.log("this doesn't execute, I'm guessing because models has length of 0");
   }
  }

  fetchAll(): void {
    axios.get(this.rootURL)
      .then((response: AxiosResponse) => {
        response.data.forEach((value: K) => {
          this.models.push(this.deserialize(value));
        });
        this.trigger('change');
      });
  }
}