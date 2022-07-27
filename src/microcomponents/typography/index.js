import React from 'react';
import PropTypes from 'prop-types';
import CoreTypography from '@material-ui/core/Typography';

function Typography({ children, className, variant, align, display, color, component, id }) {
  return (
    <CoreTypography
      className={className}
      variant={variant}
      align={align}
      display={display}
      color={color}
      component={component}
      id={id}
    >
      {children}
    </CoreTypography>
  );
}

Typography.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  display: PropTypes.oneOf(['initial', 'block', 'inline']),
  align: PropTypes.oneOf(['inherit', 'left', 'center', 'right', 'justify']),
  variant: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
    'caption',
    'button',
    'overline',
    'srOnly',
    'inherit'
  ]),
  color: PropTypes.oneOf(['initial', 'inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary', 'error']),
  component: PropTypes.elementType,
  id: PropTypes.string
};

Typography.defaultProps = {
  variant: 'body1',
  align: 'inherit',
  display: 'initial',
  color: 'initial'
};

export default Typography;
