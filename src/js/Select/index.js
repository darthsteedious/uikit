import React from 'react';
import PropTypes from 'prop-types';
import {ident} from "js/util";
export {default as Option} from './Option';
import './style.scss';

const Select = React.forwardRef((props, ref) => {
  const { children, className, onBlur, onChange, onFocus, value } = props;
  return (
    <select className={className} onBlur={onBlur} onChange={onChange} onFocus={onFocus} ref={ref} value={value}>
      {React.Children.toArray(children)}
    </select>
  );
});

Select.propTypes = {
  children: PropTypes.arrayOf(Option).isRequired,
  className: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Select.defaultProps = {
  className: '',
  onBlur: ident,
  onFocus: ident,
};

Select.Option = Option;

export default Select;