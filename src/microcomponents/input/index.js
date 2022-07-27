import React from "react";
import PropTypes from "prop-types";
import CoreTextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
  },
}));

function Input({
  label,
  className,
  value,
  type,
  helperText,
  error,
  onChange,
  onClick,
  id,
  disabled,
  rows,
  margin,
  variant,
  rowsMax,
  multiline,
  InputProps,
  InputLabelProps,
}) {
  const classes = useStyles();
  return (
    <CoreTextField
      id={id}
      helperText={helperText}
      error={error}
      label={label}
      className={`${classes.root} ${className}`}
      value={value}
      onChange={onChange}
      onClick={onClick}
      type={type}
      margin={margin}
      variant={variant}
      rows={rows}
      rowsMax={rowsMax}
      multiline={multiline}
      InputProps={InputProps}
      InputLabelProps={InputLabelProps}
      disabled={disabled}
    />
  );
}

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["text", "password"]),
  helperText: PropTypes.string,
  error: PropTypes.bool,
  rows: PropTypes.string,
  margin: PropTypes.string,
  variant: PropTypes.string,
  multiline: PropTypes.bool,
  rowsMax: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  InputProps: PropTypes.object,
  InputLabelProps: PropTypes.object,
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  value: "",
  type: "text",
  disabled: false,
  // error: false,
  // margin: "dense",
  // multiline: false
};

export default Input;
