/* eslint-disable no-console */
export class Set {
  dataStore: Array<string | number>;

  constructor() {
    this.dataStore = [];
  }

  size() {
    return this.dataStore.length;
  }

  find(item: string | number) {
    let place = this.dataStore.indexOf(item);
    if (place < 0) return -1;
    else return place;
  }

  add(item: string | number) {
    let checkExistence = this.find(item);
    if (checkExistence == -1) {
      this.dataStore.push(item);
    }
  }

  remove(item: string | number) {
    let checkExistence = this.find(item);
    if (checkExistence != -1) {
      this.dataStore.splice(checkExistence, 1);
    }
  }

  show() {
    console.log(this.dataStore);
  }
}