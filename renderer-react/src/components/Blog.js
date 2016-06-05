import React, { PropTypes } from 'react';

/**
 * Blog renderer
 * @param props
 * @returns {XML}
 * @constructor
 */
export default function BlogRenderer(props) {
  return (
    <header>
      <hgroup>
        <h1>{props.title}</h1>
        <h2>{props.name}</h2>
      </hgroup>
    </header>
  );
}

BlogRenderer.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
};
