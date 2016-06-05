import React, { Component, PropTypes } from 'react';
import Blog from '../../../src/modules/blog';

export default class BlogRenderer extends Component {

    constructor(props) {
        super(props);
        this.blog = new Blog(props.title, props.name);
    }

    static propTypes = {
        title: PropTypes.string,
        name: PropTypes.string
    };

    render() {
        return (
            <header>
                <hgroup>
                    <h1>{this.blog.title}</h1>
                    <h2>{this.blog.name}</h2>
                </hgroup>
            </header>
        );
    }
}
