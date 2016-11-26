import Algorithm from '../../Abstractions/Algorithm';
import ORDER from '../../Register/seqOrderEnum';

/**
 * Insertion sort algorithm implementation - sorts a collection/array values into sorted sequence
 * of decreasing or increasing series from unsorted random series of provided input
 */
export default class InsertionSort extends Algorithm {

  /**
   * Sorts a collection/array values into sorted sequence of decreasing or increasing series from
   * unsorted random series of provided input and preferred order
   * @param {Array} input  Collection of random series with unsorted series
   * @param {string} order  Preferred order input - 'ASC' (ascending) or 'DESC (descending)
   * @returns {Array} Sorted collection of given order from input
   */
  execute(input, order) {
    const sortedSet = input;
    for (let i = 1, j, key; i < sortedSet.length; i += 1) {
      key = sortedSet[i];
      j = i - 1;
      if (ORDER.ARRANGE_ORDER.INCREASING_ORDER === order) {
        while (j >= 0 && sortedSet[j] > key) {
          sortedSet[j + 1] = sortedSet[j];
          j -= 1;
        }
      } else if (ORDER.ARRANGE_ORDER.DECREASING_ORDER === order) {
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
