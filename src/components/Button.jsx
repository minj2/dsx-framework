import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

export const Button = ({ label, primary, ...props }) => {
  return (
    <button
      className={primary ? "btn-primary" : "btn-secondary"}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  primary: PropTypes.bool,
};
