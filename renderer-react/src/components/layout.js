import React, { PropTypes } from 'react';

export default function Wrapper(props) {
  return (
    <div className="layout-wrapper">
      {props.children}
    </div>
  );
}

Wrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
};
