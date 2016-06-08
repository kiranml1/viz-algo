import chai from 'chai';
import Blog from '../../src/modules/blog';
import Framework from '../../src/modules/framework';
import SingletonHelper from '../../src/modules/singleton-helper';
let expect = chai.expect;
import { version } from '../../package.json';

describe('Blog class spec suite', () => {

  describe('Blog with new instance', function () {

    let blog;

    beforeEach(() => {
      blog = new Blog();
    });

    it('should match version', () => {
      expect(blog.getVersion()).to.equal(version);
    });

    it('should match title', () => {
      expect(blog.getTitle()).to.equal('no-title');
    });

    it('should match author', () => {
      expect(blog.getAuthor()).to.equal('unknown-author');
    });

    it('should match when we set author', () => {
      blog.setAuthor('Some Author');
      expect(blog.getAuthor()).to.equal('Some Author');
    });

    it('should match when we set title', () => {
      blog.setTitle('Some Title');
      expect(blog.getTitle()).to.equal('Some Title');
    });

    it('instance should match framework class', () => {
      expect(blog instanceof Framework).to.equal(true);
    });

  });

  describe('when blog instance is created with title and author', function () {

    let blog;

    beforeEach(() => {
      blog = new Blog('Test', 'Tester');
    });

    it('should match version', () => {
      expect(blog.getVersion()).to.equal(version);
    });

    it('should match title', () => {
      expect(blog.getTitle()).to.equal('Test');
    });

    it('should match author', () => {
      expect(blog.getAuthor()).to.equal('Tester');
    });

    it('should match when we set author', () => {
      blog.setAuthor('Some Author');
      expect(blog.getAuthor()).to.equal('Some Author');
    });

    it('should match when we set title', () => {
      blog.setTitle('Some Title');
      expect(blog.getTitle()).to.equal('Some Title');
    });

    it('instance should match framework class', () => {
      expect(blog instanceof Framework).to.equal(true);
    });

  });

  describe('when blog instance is created with singleton title and author', function () {

    let blog;

    beforeEach(() => {
      blog = SingletonHelper.callClass(Blog, 'Test', 'Tester');
    });

    it('should match version', () => {
      expect(blog.getVersion()).to.equal(version);
    });

    it('should match title', () => {
      expect(blog.getTitle()).to.equal('Test');
    });

    it('should match author', () => {
      expect(blog.getAuthor()).to.equal('Tester');
    });

    it('instance should match framework class', () => {
      expect(blog instanceof Framework).to.equal(true);
    });

  });

  describe('when blog instance is created for second time with singleton without title and author', () => {

    let blog;

    beforeEach(() => {
      blog = SingletonHelper.callClass(Blog);
    });

    it('should match version', () => {
      expect(blog.getVersion()).to.equal(version);
    });

    it('should not match title with no arguments in class since it is singleton and already ran in above spec', function () {
      expect(blog.getTitle()).to.not.equal('no-title');
    });

    it('should not match author with no arguments in class since it is singleton and already ran in above spec', function () {
      expect(blog.getTitle()).to.not.equal('unknown-author');
    });

    it('should match title', () => {
      expect(blog.getTitle()).to.equal('Test');
    });

    it('should match author', () => {
      expect(blog.getAuthor()).to.equal('Tester');
    });

    it('should match when we set author', () => {
      blog.setAuthor('Some Author');
      expect(blog.getAuthor()).to.equal('Some Author');
    });

    it('should match when we set title', () => {
      blog.setTitle('Some Title');
      expect(blog.getTitle()).to.equal('Some Title');
    });

    it('instance should match framework class', () => {
      expect(blog instanceof Framework).to.equal(true);
    });

  });

});