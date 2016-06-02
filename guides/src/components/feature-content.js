import React, { Component, PropTypes } from 'react'

export default class FeatureContent extends Component {

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

FeatureContent.prototype.propTypes = {
    children: PropTypes.object
};
