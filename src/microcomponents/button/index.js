import React from "react";
import PropTypes from "prop-types";
import CoreButton from "@material-ui/core/Button";

function Button({ className, children, color, variant, onClick, disabled, fullWidth, size }) {
  return (
    <CoreButton
      className={className}
      variant={variant}
      color={color}
      onClick={onClick}
      disabled={disabled}
      fullWidth={fullWidth}
      size={size}
    >
      {children}
    </CoreButton>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  color: PropTypes.oneOf(["default", "inherit", "primary", "secondary"]),
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["text", "outlined", "contained"]),
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  size: PropTypes.oneOf(["large", "medium", "small"]),
};

Button.defaultProps = {
  color: "default",
  variant: "contained",
  disabled: false,
  fullWidth: false,
  size: "medium"
};

export default Button;
