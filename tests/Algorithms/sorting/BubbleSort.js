import { expect } from 'chai';
import BubbleSort from '../../../src/Algorithms/sorting/BubbleSort';

describe('bubble sort algorithm\'s test suite', () => {

  let algorithmInstance;

  beforeEach(() => {
    algorithmInstance = new BubbleSort();
  });

  it('expect class name of bubble sort algorithm in instance', () => {
    expect(algorithmInstance.name).to.eql('BubbleSort');
  });

  it('expect ascending sequence after bubble sort for the input of numbers', () => {
    const input = [5, 2, 4, 6, 1, 3];
    const expected = [ 1, 2, 3, 4, 5, 6 ];
    expect(algorithmInstance.execute(input, 'ASC')).to.eql(expected);
  });

  it('expect ascending sequence after bubble sort for the input of numbers', () => {
    const input = [41, 59, 26, 41, 58];
    const expected = [ 26, 41, 41, 58, 59];
    expect(algorithmInstance.execute(input, 'ASC')).to.eql(expected);
  });

  it('expect descending sequence after bubble sort for the input of numbers', () => {
    const input = [5, 2, 4, 6, 1, 3];
    const expected = [ 6, 5, 4, 3, 2, 1];
    expect(algorithmInstance.execute(input, 'DESC')).to.eql(expected);
  });

  it('expect descending sequence after bubble sort for the input of numbers', () => {
    const input = [41, 59, 26, 41, 58];
    const expected = [ 59, 58, 41, 41, 26 ];
    expect(algorithmInstance.execute(input, 'DESC')).to.eql(expected);
  });
});
