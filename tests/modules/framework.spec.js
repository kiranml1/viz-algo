import Framework from '../../src/modules/framework';
import { version } from './../../package.json';
import chai from 'chai';
const expect = chai.expect;

describe('Framework class suite', () => {
  let framework;

  beforeEach(() => {
    framework = new Framework();
  });

  it('framework instance should be defined', () => {
    expect(framework instanceof Framework).to.equal(true);
  });

  it('framework should match version of package.json', () => {
    expect(version).to.equal(framework.version);
    expect(version).to.equal(framework.getVersion());
  });
});
