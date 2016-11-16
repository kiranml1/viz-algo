import { expect } from 'chai';
import { VERSION } from './../src/index';
import { version } from './../package.json';

describe('index module suite of library', () => {
  it('version test', () => {
    expect(VERSION).to.equal(version);
  });
});
