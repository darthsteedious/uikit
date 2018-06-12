import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Label(props) {
  const { children, className, htmlFor, id, ref } = props;
  return (
    <label htmlFor={htmlFor} className={classNames('label', className)} id={id} ref={ref}>{children}</label>
  )
}

Label.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  htmlFor: PropTypes.string.isRequired,
  id: PropTypes.string,
  ref: PropTypes.object,
};

Label.defaultProps = {
  className: '',
  id: '',
  ref: null,
};