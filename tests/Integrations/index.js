import { expect } from 'chai';
import { VERSION, InsertionSort, LinearSearch } from './../../src/index';
import { version } from './../../package.json';

describe('wrapped package of entire library\'s \'index.js\' test suite ', () => {
  it('should match version name from the package.json version', () => {
    expect(VERSION).to.equal(version);
  });

  it('expect Insertion sort algorithm must to be defined', () => {
    expect(InsertionSort).to.be.ok;
  });

  it('expect Linear search algorithm must to be defined', () => {
    expect(LinearSearch).to.be.ok;
  });

});
