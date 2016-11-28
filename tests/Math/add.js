import { expect } from 'chai';
import add from './../../src/Math/add';

describe('Math arithmetic operations test suite ', () => {
  it('should add operation exist', () => {
    expect(add).to.exist;
  });

  it('test two numbers', () => {
    expect(add(20,30)).to.equal(50);
  });
});
