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

  union(setItem: Set) {
    let tempSet = new Set();
    for (let i = 0; i < this.dataStore.length; i++) {
      tempSet.add(this.dataStore[i]);
    }

    for (let i = 0; i < setItem.dataStore.length; i++) {
      tempSet.add(setItem.dataStore[i]);
    }

    return tempSet;
  }

  intersection(setItem: Set) {
    let resultSet = new Set();
    for (let i = 0; i < this.dataStore.length; i++) {
      if (setItem.find(this.dataStore[i]) != -1) {
        resultSet.add(this.dataStore[i]);
      }
    }
    return resultSet;
  }

  subset(setItem: Set) {
    if (this.dataStore.length > setItem.dataStore.length) return false;

    for (let i = 0; i < this.dataStore.length; i++) {
      if (setItem.find(this.dataStore[i]) == -1) return false;
    }

    return true;
  }

  show() {
    console.log(this.dataStore);
  }
}
