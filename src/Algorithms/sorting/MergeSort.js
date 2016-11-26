import Algorithm from '../../Abstractions/Algorithm';
import ORDER from '../../Register/seqOrderEnum';

/**
 * Merge sort algorithm implementation - sorts a collection/array values into sorted sequence
 * of decreasing or increasing series from unsorted random series of provided input
 */
export default class MergeSort extends Algorithm {

  merge(left, right, order) {
    const result = [];

    while (left.length && right.length) {
      if (ORDER.ARRANGE_ORDER.INCREASING_ORDER === order) {
        if (left[0] <= right[0]) {
          result.push(left.shift());
        } else {
          result.push(right.shift());
        }
      } else if (ORDER.ARRANGE_ORDER.DECREASING_ORDER === order) {
        if (left[0] >= right[0]) {
          result.push(left.shift());
        } else {
          result.push(right.shift());
        }
      }
    }

    while (left.length) {
      result.push(left.shift());
    }

    while (right.length) {
      result.push(right.shift());
    }

    return result;
  }

  /**
   * Sorts a collection/array values into sorted sequence of decreasing or increasing series from
   * unsorted random series of provided input and preferred order
   * @param {Array} input  Collection of random series with unsorted series
   * @param {string} order  Preferred order input - 'ASC' (ascending) or 'DESC (descending)
   * @returns {Array} Sorted collection of given order from input
   */
  execute(input, order) {

    if (input.length < 2) {
      return input;
    }

    const middle = parseInt(input.length / 2, 0);
    const left = input.slice(0, middle);
    const right = input.slice(middle, input.length);

    return this.merge(this.execute(left, order), this.execute(right, order), order);
  }

}
