import { expect } from 'chai';
import { InsertionSort } from './../../src/index';

describe('insertion sort algorithm\'s test suite', () => {
  it('expect class name of insertion sort algorithm in instance', () => {
    const algorithmInstance = new InsertionSort();
    expect(algorithmInstance.name).to.eql('InsertionSort');
  });

  it('expect ascending sequence after insertion sort', () => {
    const input = [5, 2, 4, 6, 1, 3];
    const expected = [ 1, 2, 3, 4, 5, 6 ];
    expect(new InsertionSort().execute(input, 'ASC')).to.eql(expected);
  });

  it('expect ascending sequence after insertion sort', () => {
    const input = [41, 59, 26, 41, 58];
    const expected = [ 26, 41, 41, 58, 59];
    expect(new InsertionSort().execute(input, 'ASC')).to.eql(expected);
  });

  it('expect descending sequence after insertion sort', () => {
    const input = [5, 2, 4, 6, 1, 3];
    const expected = [ 6, 5, 4, 3, 2, 1];
    expect(new InsertionSort().execute(input, 'DESC')).to.eql(expected);
  });

  it('expect descending sequence after insertion sort', () => {
    const input = [41, 59, 26, 41, 58];
    const expected = [ 59, 58, 41, 41, 26 ];
    expect(new InsertionSort().execute(input, 'DESC')).to.eql(expected);
  });
});
