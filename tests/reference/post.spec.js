import Post from './../../src/modules/post';
import Blog from '../../src/modules/blog';
import Framework from '../../src/modules/framework';
import SingletonHelper from '../../src/modules/singleton-helper';
import chai from 'chai';
const expect = chai.expect;

describe('Post class spec suite', () => {
  describe('Should class extend from Blog', () => {
    let postInstance;

    beforeEach(() => {
      postInstance = new Post('Some Title');
    });

    it('instance should be of Post class', () => {
      expect(postInstance instanceof Post).to.equal(true);
    });

    it('instance should be of Blog class', () => {
      expect(postInstance instanceof Blog).to.equal(true);
    });

    it('instance should be of Framework class', () => {
      expect(postInstance instanceof Framework).to.equal(true);
    });

    it('instance should not match unextended class', () => {
      expect(postInstance instanceof SingletonHelper).to.equal(false);
    });
  });

  describe('Assetimg Properties and methods of Post class', () => {
    let postInstance;
    beforeEach(() => {
      postInstance = new Post('Some Title');
    });

    it('should match title', () => {
      expect(postInstance.postTitle).to.equal('Some Title');
      expect(postInstance.getPostTitle()).to.equal('Some Title');
    });

    it('should match the title from setTitle method from the class method', () => {
      postInstance.setPostTitle('Title');
      expect(postInstance.postTitle).to.equal('Title');
    });

    it('should match the author', () => {
      expect(postInstance.getAuthor()).to.equal('unknown-author');
    });

    it('should match the suthor when we set the author', () => {
      postInstance.setAuthor('Some one');
      expect(postInstance.getAuthor()).to.equal('Some one');
    });

    it('should match the content', () => {
      postInstance.setContent('Some content');
      expect(postInstance.getContent()).to.equal('Some content');
    });
  });
});
