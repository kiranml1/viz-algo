import Algorithm from '../Abstractions/Algorithm';

export default class LinearSearch extends Algorithm {

  set input(input) {
    this._input = input;
  }

  get input() {
    return this._input;
  }

  execute(input, value) {
    let exists = false;
    this.input = input;
    for (let i = 0; i < this.input.length; i += 1) {
      if (this.input[i] === value) {
        exists = true;
      }
    }
    return exists;
  }

}