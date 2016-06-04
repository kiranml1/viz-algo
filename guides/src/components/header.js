import React, { Component, PropTypes } from 'react';

require('!style!css!sass!./../../../src/sass/Layout.scss');

let Mixin = InnerComponent => class extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <InnerComponent {...this.props}/>
        );
    }

};

const Header =  (props) => {
    return (
        <header>
            <hgroup>
                <h1>{props.title}</h1>
                <h2>{props.name}</h2>
            </hgroup>
        </header>
    );
};

Header.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string
};

let HeaderMixed = Mixin(Header);

export default HeaderMixed;
