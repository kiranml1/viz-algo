import chai from 'chai';
import { InsertionSort } from './../../src/index';
const expect = chai.expect;

describe('insertion sort test suite', () => {

  it('insertion sort algorithm params', () => {
    const algo = new InsertionSort();
    expect(algo.name).to.eql('InsertionSort');
  });

  it('insertion sort - ascending', () => {
    const input = [5, 2, 4, 6, 1, 3];
    const expected = [ 1, 2, 3, 4, 5, 6 ];
    expect(new InsertionSort().execute(input, 'ASC')).to.eql(expected);
  });

  it('insertion sort - ascending', () => {
    const input = [41, 59, 26, 41, 58];
    const expected = [ 26, 41, 41, 58, 59];
    expect(new InsertionSort().execute(input, 'ASC')).to.eql(expected);
  });

  it('insertion sort - descending', () => {
    const input = [5, 2, 4, 6, 1, 3];
    const expected = [ 6, 5, 4, 3, 2, 1];
    expect(new InsertionSort().execute(input, 'DESC')).to.eql(expected);
  });

  it('insertion sort - descending', () => {
    const input = [41, 59, 26, 41, 58];
    const expected = [ 59, 58, 41, 41, 26 ];
    expect(new InsertionSort().execute(input, 'DESC')).to.eql(expected);
  });

});