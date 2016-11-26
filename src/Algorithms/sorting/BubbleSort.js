import Algorithm from '../../Abstractions/Algorithm';
import ORDER from '../../Register/seqOrderEnum';

/**
 * Bubble sort algorithm implementation - sorts a collection/array values into sorted sequence
 * of decreasing or increasing series from unsorted random series of provided input
 */
export default class BubbleSort extends Algorithm {

  /**
   * Sorts a collection/array values into sorted sequence of decreasing or increasing series from
   * unsorted random series of provided input and preferred order
   * @param {Array} input  Collection of random series with unsorted series
   * @param {string} order  Preferred order input - 'ASC' (ascending) or 'DESC (descending)
   * @returns {Array} Sorted collection of given order from input
   */
  execute(input, order) {
    const sortedSet = input;
    for (let i = sortedSet.length - 1; i >= 0; i -= 1) {
      for (let j = 1; j <= i; j += 1) {
        if (ORDER.ARRANGE_ORDER.INCREASING_ORDER === order && sortedSet[j - 1] > sortedSet[j]) {
          const temp = sortedSet[j - 1];
          sortedSet[j - 1] = sortedSet[j];
          sortedSet[j] = temp;
        } else if (ORDER.ARRANGE_ORDER.DECREASING_ORDER === order) {
          if (sortedSet[j - 1] < sortedSet[j]) {
            const temp = sortedSet[j - 1];
            sortedSet[j - 1] = sortedSet[j];
            sortedSet[j] = temp;
          }
        }
      }
    }
    return sortedSet;
  }

}
