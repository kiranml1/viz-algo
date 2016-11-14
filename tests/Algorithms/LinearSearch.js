import chai from 'chai';
import { LinearSearch } from './../../src/index';
const expect = chai.expect;

describe('search test suite', () => {

  it('should expect Algorithm name', () => {
    const linearSeach = new LinearSearch();
    expect(linearSeach.name).to.eql('LinearSearch');
  });

  it('should expect Algorithm name', () => {
    const linearSeach = new LinearSearch();
    expect(linearSeach.name).not.to.eql('LinearSearchAlgorithm');
  });

  it('should expect', () => {
    const linearSeach = new LinearSearch();
    expect(linearSeach.execute([5, 2, 4, 6, 1, 3], 3)).to.eql(true);
    expect(linearSeach.execute([5, 2, 4, 6, 1, 3], 5)).to.eql(true);
  });

  it('should not expect', () => {
    const linearSeach = new LinearSearch();
    expect(linearSeach.execute([5, 2, 4, 6, 1, 3], 8)).not.to.eql(true);
    expect(linearSeach.execute([5, 2, 4, 6, 1, 3], 100)).not.to.eql(true);
  });

});