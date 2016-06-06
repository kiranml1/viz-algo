import framework from '../../src/modules/framework';
import { version } from './../../package.json';
import chai from 'chai';
let expect = chai.expect;

describe('framework suite', () => {

  it('framework should be defined', () => {
    expect(framework).to.not.be.undefined;
  });

  it('framework should match version', () => {
    expect(version).to.equal(framework.version);
    expect(version).to.equal(framework.getVersion());
  });

});