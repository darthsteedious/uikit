import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './_input.scss';

export default function Input(props) {
  const { className, id, type, onChange, onFocus, onBlur, value, parentRef } = props;
  return (
    <input className={classNames('input', className)} id={id}
           onChange={onChange} onFocus={onFocus} onBlur={onBlur}
           type={type} value={value} ref={parentRef}/>
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