import Algorithm from '../../Abstractions/Algorithm';
import ORDER from '../../register/seqOrderEnum';

/**
 * Selection sort algorithm implementation - sorts a collection/array values into sorted sequence
 * of decreasing or increasing series from unsorted random series of provided input
 */
export default class SelectionSort extends Algorithm {

  /**
   * Sorts a collection/array values into sorted sequence of decreasing or increasing series from
   * unsorted random series of provided input and preferred order
   * @param {Array} input  Collection of random series with unsorted series
   * @param {string} order  Preferred order input - 'ASC' (ascending) or 'DESC (descending)
   * @returns {Array} Sorted collection of given order from input
   */
  execute(input, order) {
    const sortedSet = input;
    for (let i = 0; i < sortedSet.length - 1; i += 1) {
      let min = i;
      for (let j = i + 1; j < sortedSet.length; j += 1) {
        if (ORDER.ARRANGE_ORDER.INCREASING_ORDER === order && sortedSet[j] < sortedSet[min]) {
          min = j;
        }
        if (ORDER.ARRANGE_ORDER.DECREASING_ORDER === order && sortedSet[j] > sortedSet[min]) {
          min = j;
        }
      }
      const temp = sortedSet[i];
      sortedSet[i] = sortedSet[min];
      sortedSet[min] = temp;
    }
    return sortedSet;
  }

}
