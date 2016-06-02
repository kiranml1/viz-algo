import React, { Component, PropTypes } from 'react';

export default class FeatureContent extends Component {

    static propTypes = {
      children: PropTypes.object
    };

    constructor(props) {
        super(props);
    }

    getFeatureContent() {
        return 'Feature Content';
    }

    render() {
        return (
            <section>
                {this.props.children},
                {this.getFeatureContent.call(this)}
            </section>
        );
    }
}
