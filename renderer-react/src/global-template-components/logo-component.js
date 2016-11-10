import React, { PropTypes } from 'react';

export default function LogoComponent(props) {
  return (
    <div className="device-notification">
      <a className="device-notification-logo" href="#">
        <img src={props.url} alt={props.desc} />
        <p>{props.title}</p>
      </a>
    </div>
  );
}

LogoComponent.propTypes = {
  url: PropTypes.string,
  desc: PropTypes.string,
  title: PropTypes.string,
};
