jest.unmock('../guides/src/components/Blog');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Blog from '../guides/src/components/Blog';

describe('Blog Component', () => {

    it('Blog', () => {
        const blog = TestUtils.renderIntoDocument(
            <Blog />
        );

        const blogNode = ReactDOM.findDOMNode(blog);

        expect(blogNode.textContent).toEqual('Hello Blogging');

        expect(true).toEqual(true);

    });

});