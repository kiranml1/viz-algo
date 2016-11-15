import chai from 'chai';
import { VERSION } from './../../lib/vizalgo';
import { version } from './../../package.json';

const expect = chai.expect;

describe('index module suite of webpack generated library', () => {

  it('version test', () => {
    expect(VERSION).to.equal(version);
  });

});