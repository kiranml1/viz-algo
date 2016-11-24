import { expect } from 'chai';
import LinearSearch from '../../../src/Algorithms/search/LinearSearch';

describe('linear search algorithm\'s test suite', () => {
  let linearSearch;
  beforeEach(() => {
    linearSearch = new LinearSearch();
  });
  it('expect class name of linear search algorithm in instance', () => {
    expect(linearSearch.name).to.eql('LinearSearch');
  });

  it('expect not class name of linear search algorithm in instance', () => {
    expect(linearSearch.name).not.to.eql('LinearSearchAlgorithm');
  });

  it('expect the given value of type number exists in the collection', () => {
    expect(linearSearch.execute([5, 2, 4, 6, 1, 3], 3)).to.eql(true);
    expect(linearSearch.execute([5, 2, 4, 6, 1, 3], 5)).to.eql(true);
  });

  it('expect not the given value of type number exists in the collection', () => {
    expect(linearSearch.execute([5, 2, 4, 6, 1, 3], 8)).not.to.eql(true);
    expect(linearSearch.execute([5, 2, 4, 6, 1, 3], 100)).not.to.eql(true);
  });

  it('expect the given value of type string exists in the collection', () => {
    expect(linearSearch.execute(['5', '2', '4', '6', '1', '3'], '3')).to.eql(true);
    expect(linearSearch.execute(['5', '2', '4', '6', '1', '3'], '5')).to.eql(true);
  });

  it('expect note the given value of type string exists in the collection', () => {
    expect(linearSearch.execute(['5', '2', '4', '6', '1', '3'], 3)).not.to.eql(true);
    expect(linearSearch.execute(['5', '2', '4', '6', '1', '3'], 5)).not.to.eql(true);
  });

  it('expect not the given value of type number exists in the collection', () => {
    expect(linearSearch.execute(['5', '2', '4', '6', '1', '3'], 8)).not.to.eql(true);
    expect(linearSearch.execute(['5', '2', '4', '6', '1', '3'], 100)).not.to.eql(true);
  });

  it('expect the given value of type boolean exists in the collection', () => {
    expect(linearSearch.execute([true, false, true, false], true)).to.eql(true);
    expect(linearSearch.execute([true, false, true, false], true)).to.eql(true);
  });

  it('expect not the given value of type boolean exists in the collection', () => {
    expect(linearSearch.execute([true, false, true, false], 'true')).not.to.eql(true);
    expect(linearSearch.execute([true, false, true, false], 'false')).not.to.eql(true);
  });
});
