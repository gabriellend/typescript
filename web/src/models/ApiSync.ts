import axios, { AxiosPromise } from 'axios';
import { Sync } from './Model';
 
interface HasId {
  id?: number;
}

export class ApiSync<T extends HasId> implements Sync<T> {
  constructor(public rootURL: string) {}

  // fetch gets a user from the server
  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootURL}/${id}`);
  }

  // save saves one user to the server
  save(data: T): AxiosPromise {
    const { id } = data;

    if (id) {
      return axios.put(`${this.rootURL}/${id}`, data);
    } else {
      return axios.post(this.rootURL, data);
    }
  }
}