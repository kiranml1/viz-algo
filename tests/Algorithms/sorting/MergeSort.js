import { expect } from 'chai';
import MergeSort from '../../../src/Algorithms/sorting/MergeSort';

describe('merge sort algorithm\'s test suite', () => {
  let algorithmInstance;

  beforeEach(() => {
    algorithmInstance = new MergeSort();
  });

  it('expect class name of merge sort algorithm in instance', () => {
    expect(algorithmInstance.name).to.eql('MergeSort');
  });

  it('expect ascending sequence after merge sort for the input of numbers', () => {
    const input = [5, 2, 4, 6, 1, 3];
    const expected = [1, 2, 3, 4, 5, 6];
    expect(algorithmInstance.execute(input, 'ASC')).to.eql(expected);
  });

  it('expect ascending sequence after merge sort for the input of numbers', () => {
    const input = [41, 59, 26, 41, 58];
    const expected = [26, 41, 41, 58, 59];
    expect(algorithmInstance.execute(input, 'ASC')).to.eql(expected);
  });

  it('expect descending sequence after merge sort for the input of numbers', () => {
    const input = [5, 2, 4, 6, 1, 3];
    const expected = [6, 5, 4, 3, 2, 1];
    expect(algorithmInstance.execute(input, 'DESC')).to.eql(expected);
  });

  it('expect descending sequence after merge sort for the input of numbers', () => {
    const input = [41, 59, 26, 41, 58];
    const expected = [59, 58, 41, 41, 26];
    expect(algorithmInstance.execute(input, 'DESC')).to.eql(expected);
  });
});
