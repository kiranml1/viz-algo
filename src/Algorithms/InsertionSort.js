import Algorithm from '../Abstractions/Algorithm';
import ORDER from '../register/seqOrderEnum';

export default class InsertionSort extends Algorithm {

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
