import React, { PropTypes } from 'react';

/**
 * Blog renderer
 * @param props
 * @returns {XML}
 * @constructor
 */
export default function BlogWrapper(props) {
  return (
    <header>
      <h1>{`${props.title} @ ${props.author}`}</h1>
    </header>
  );
}

BlogWrapper.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};
