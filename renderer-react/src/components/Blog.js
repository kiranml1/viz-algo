import React, { PropTypes } from 'react';

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
