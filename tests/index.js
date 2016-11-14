import chai from 'chai';
import { VERSION } from './../src/index';
import { version } from './../package.json';

const expect = chai.expect;

describe('index module suite of library', () => {

  it('version test', () => {
    expect(VERSION).to.equal(version);
  });

});