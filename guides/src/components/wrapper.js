import React, { Component, PropTypes } from 'react';

export default class Wrapper extends Component {

    static propTypes = {
        children: PropTypes.array
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="wrapper">
                {this.props.children}
            </div>
        );
    }
}

