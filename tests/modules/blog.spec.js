import chai from 'chai';
import Blog from '../../src/modules/blog';
import moment from 'moment';
let expect = chai.expect;

describe('should match', () => {

    let blog,
        createdTime;

    beforeEach(() => {
        blog = new Blog("Test", "Tester");
        createdTime = moment().format();
    });

    it('version',() => {
        expect(blog.getVersion()).to.equal("0.0.1");
    });

    it('title',() => {
        expect(blog.getTitle()).to.equal("Test");
    });

    it('name',() => {
        expect(blog.getName()).to.equal("Tester");
    });

    it('created time', () => {
        expect(blog.getCreatedTime()).to.equal(createdTime);
    });

    it('when we set name', () => {
        blog.setName('Some Tester');
        expect(blog.getName()).to.equal("Some Tester");
    });

    it('when we set title', () => {
        blog.setTitle('Some Test');
        expect(blog.getTitle()).to.equal("Some Test");
    });

});