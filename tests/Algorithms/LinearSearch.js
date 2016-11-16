import { expect } from 'chai';
import { LinearSearch } from './../../src/index';

describe('linear search algorithm\'s test suite', () => {
  it('expect class name of linear search algorithm in instance', () => {
    const linearSearch = new LinearSearch();
    expect(linearSearch.name).to.eql('LinearSearch');
  });

  it('expect not class name of linear search algorithm in instance', () => {
    const linearSearch = new LinearSearch();
    expect(linearSearch.name).not.to.eql('LinearSearchAlgorithm');
  });

  it('expect the given value exists in the collection', () => {
    const linearSearch = new LinearSearch();
    expect(linearSearch.execute([5, 2, 4, 6, 1, 3], 3)).to.eql(true);
    expect(linearSearch.execute([5, 2, 4, 6, 1, 3], 5)).to.eql(true);
  });

  it('expect not the given value exists in the collection', () => {
    const linearSearch = new LinearSearch();
    expect(linearSearch.execute([5, 2, 4, 6, 1, 3], 8)).not.to.eql(true);
    expect(linearSearch.execute([5, 2, 4, 6, 1, 3], 100)).not.to.eql(true);
  });
});
