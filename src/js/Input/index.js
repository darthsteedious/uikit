import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Input(props) {
  const { className, id, type, onChange, onFocus, onBlur, value } = props;
  return (
    <input className={classNames('input', className)} id={id} onChange={onChange}
           type={type} value={value} />
  );
}

Input.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.oneof([PropTypes.number, PropTypes.string]).isRequired,
};

Input.defaultProps = {
  id: null,
  className: null,
  type: '',
};