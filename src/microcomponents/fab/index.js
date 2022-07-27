import React from "react";
import PropTypes from "prop-types";
import CoreFab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: theme.spacing(20),
  },
}));

function Fab({ children, className, color, variant, size, onClick, id, type }) {
  const classes = useStyles();
  return (
    <CoreFab
      classes={{
        root: classes.root,
      }}
      className={className}
      variant={variant}
      size={size}
      color={color}
      onClick={onClick}
      id={id}
      type={type}
    >
      {children}
    </CoreFab>
  );
}

Fab.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["round", "extended"]),
  color: PropTypes.oneOf(["default", "inherit", "primary", "secondary"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  onClick: PropTypes.func,
  id: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit"]),
};

Fab.defaultProps = {
  color: "default",
  variant: "extended",
  size: "large",
  type: "button",
};

export default Fab;
