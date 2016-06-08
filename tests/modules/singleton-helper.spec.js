import SingletonHelper from '../../src/modules/singleton-helper';
import Framework from '../../src/modules/framework';
import Blog from '../../src/modules/blog';
import { version } from './../../package.json';
import chai from 'chai';
let expect = chai.expect;

describe('Singleton helper class suite', () => {

  describe('Framework singleton instantiation test with helper', () => {

    let instanceOfClass;

    beforeEach(() => {
      instanceOfClass = SingletonHelper.callClass(Framework);
    });

    it('Instance of the class should be of class passed', () => {
      expect(instanceOfClass instanceof Framework).to.equal(true);
    });

    it('framework should match version', () => {
      expect(version).to.equal(instanceOfClass.version);
      expect(version).to.equal(instanceOfClass.getVersion());
    });

    it('Instance of the class should be a singleton', () => {
      var secondInstanceOfClass = SingletonHelper.callClass(Framework);
      expect(secondInstanceOfClass).to.equal(instanceOfClass);
    });

  });

  describe('Blog singleton instantiation test with helper', () => {

    let instanceOfClass;

    beforeEach(() => {
      instanceOfClass = SingletonHelper.callClass(Blog);
    });

    it('Instance of the class should be of class passed', () => {
      expect(instanceOfClass instanceof Blog).to.equal(true);
    });

    it('framework should match version', () => {
      expect(version).to.equal(instanceOfClass.version);
      expect(version).to.equal(instanceOfClass.getVersion());
    });

    it('Instance of the class should be a singleton', () => {
      var secondInstanceOfClass = SingletonHelper.callClass(Blog);
      expect(secondInstanceOfClass).to.equal(instanceOfClass);
    });

  });

  describe('Test Singleton Class', () => {

    it('Singleton getInstances should have called instances', () => {
      expect(SingletonHelper._instances.length).to.equal(2);
    });

    it('Singleton instance should be last called class', () => {
      expect(SingletonHelper._instanceOfClass instanceof Blog).to.equal(true);
    });

  });

});