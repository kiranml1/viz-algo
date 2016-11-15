import Algorithm from '../Abstractions/Algorithm';

export default class InsertionSort extends Algorithm {

  constructor() {
    super();
    this.orders = new Map();
    this.setOrders();
  }

  setOrders() {
    this.orders.set('ASC', 'asc');
    this.orders.set('DESC', 'desc');
  }

  set order(order) {
    this._order = this.orders.get(order);
  }

  get order() {
    return this._order;
  }

  execute(input, order) {
    const sortedSet = input;
    for (let i = 1, j, key; i < sortedSet.length; i += 1) {
      key = sortedSet[i];
      j = i - 1;
      this.order = order;
      if (this.orders.get('ASC') === this.order) {
        while (j >= 0 && sortedSet[j] > key) {
          sortedSet[j + 1] = sortedSet[j];
          j -= 1;
        }
      } else if (this.orders.get('DESC') === this.order) {
        while (j >= 0 && sortedSet[j] < key) {
          sortedSet[j + 1] = sortedSet[j];
          j -= 1;
        }
      }
      sortedSet[j + 1] = key;
    }
    return sortedSet;
  }

}
