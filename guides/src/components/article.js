import React, { Component, PropTypes } from 'react';

export default class Article extends Component {

    static propTypes = {
        title: PropTypes.string,
        children: PropTypes.string
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <article>
                <header>
                    <h1>{this.props.title}</h1>
                </header>
                <section>
                    {this.props.children}
                </section>
            </article>
        );
    }
}
