export default class Algorithm {
  constructor() {
    this.setName();
  }

  set name(name) {
    if (name) {
      this._name = name;
    }
  }

  get name() {
    return this._name;
  }

  setName() {
    this.name = this.constructor.name;
  }
}
