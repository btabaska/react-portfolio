import React from "react";

const LinkButton = ({ props }) => {
  return (
    <button type="button" className="btn btn-secondary">
      <a className="text-white" href={props.link}>
        <i className={props.icon}></i> {props.title}
      </a>
    </button>
  );
};

export default LinkButton;
