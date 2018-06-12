import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Button = React.forwardRef((props, ref) => {
  const { children, className, onClick } = props;
  return (
    <button className={className} onClick={onClick} ref={ref}>{children}</button>
  );
});

Button.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  className: '',
};

export default Button;