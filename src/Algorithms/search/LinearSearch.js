import Algorithm from '../../Abstractions/Algorithm';

/**
 * Linear search algorithm - finds if a given value as one of the input does exist in the input of
 * array collection given to search and returns a boolean value
 */
export default class LinearSearch extends Algorithm {

  /**
   * sets the collection to to search the value
   * @param input
   */
  set input(input) {
    this._input = input;
  }

  /**
   * gets the input collection provided for searching
   * @returns {*}
   */
  get input() {
    return this._input;
  }

  /**
   * Finds if a given value as one of the input does exist in the input of
   * array collection given to search and returns a boolean value
   * @param {Array} input
   * @param {number|string|boolean} value
   * @returns {boolean}
   */
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
