import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {ident} from 'js/util';
import './_input.scss';

export default function Input(props) {
  const {alt, checked, className, id, type, max, min, onChange, onClick, onFocus, onBlur, placeholder, ref, src, value } = props;
  return (
    <input className={classNames('input', className)} id={id} checked={checked}
           onChange={onChange} onFocus={onFocus} onBlur={onBlur} onClick={onClick}
           placeholder={placeholder} type={type} value={value} ref={ref} src={src} alt={alt}/>
  );
}

Input.propTypes = {
  alt: PropTypes.string,
  id: PropTypes.string,
  checked: PropTypes.bool,
  className: PropTypes.string,
  max: PropTypes.number,
  min: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  src: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

Input.defaultProps = {
  alt: '',
  id: null,
  className: null,
  checked: false,
  max: null,
  min: null,
  onBlur: ident,
  onClick: ident,
  onFocus: ident,
  placeholder: '',
  src: '',
  style: {},
  type: 'text',
};