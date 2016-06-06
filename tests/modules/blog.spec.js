import chai from 'chai';
import Blog, { blogInstance } from '../../src/modules/blog';
import moment from 'moment';
let expect = chai.expect;
import { version } from '../../package.json';

describe('initial blog instantiation suite', () => {

    describe('when blog instance is created with no title and author', function(){

        let blog;

        beforeEach(() => {
            blog = new Blog();
        });

        it('version',() => {
            expect(blog.getVersion()).to.equal(version);
        });

        it('title',() => {
            expect(blog.getTitle()).to.equal('no-title');
        });

        it('author',() => {
            expect(blog.getAuthor()).to.equal('unknown-author');
        });

        it('when we set author', () => {
            blog.setName('Some Author');
            expect(blog.getAuthor()).to.equal('Some Author');
        });

        it('when we set title', () => {
            blog.setTitle('Some Title');
            expect(blog.getTitle()).to.equal('Some Title');
        });

    });

    describe('when blog instance is created with title and author', function(){

        let blog;

        beforeEach(() => {
            blog = new Blog('Test', 'Tester');
        });

        it('version',() => {
            expect(blog.getVersion()).to.equal(version);
        });

        it('title',() => {
            expect(blog.getTitle()).to.equal('Test');
        });

        it('author',() => {
            expect(blog.getAuthor()).to.equal('Tester');
        });

        it('when we set author', () => {
            blog.setName('Some Author');
            expect(blog.getAuthor()).to.equal('Some Author');
        });

        it('when we set title', () => {
            blog.setTitle('Some Title');
            expect(blog.getTitle()).to.equal('Some Title');
        });

    });

    describe('when blog is created from a instance function with title and author', function() {

        let blogone,
            blogtwo;

        beforeEach(() => {
            blogone = blogInstance('Test', 'Tester');
            blogtwo = blogInstance('Test', 'Tester');
        });

        it('instance should not be created again which must be singleton', function(){
            expect(blogone).to.equal(blogtwo);
        });

        it('version',() => {
            expect(blogone.getVersion()).to.equal(version);
        });

        it('title',() => {
            expect(blogone.getTitle()).to.equal('Test');
        });

        it('author',() => {
            expect(blogone.getAuthor()).to.equal('Tester');
        });

        it('when we set author', () => {
            blogone.setName('Some Author');
            expect(blogone.getAuthor()).to.equal('Some Author');
        });

        it('when we set title', () => {
            blogone.setTitle('Some Title');
            expect(blogone.getTitle()).to.equal('Some Title');
        });

    });

});