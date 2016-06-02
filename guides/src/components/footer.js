import React, { Component, PropTypes } from 'react';

const Footer = (props) => <footer>{props.name}</footer> ;

Footer.propTypes = {
  name: PropTypes.string
};

export default Footer;
