import React from 'react';
import PropTypes from 'prop-types';
import {compose, ident, unwrapEventValue} from 'js/util';
import Input from 'js/Input';
import LabelGroup from 'js/LabelGroup';
import './_textinput.scss';

export default class TextInput extends React.Component {
  renderWithLabel = () => {
    const {labelText, id} = this.props;
    return (
      <LabelGroup htmlFor={id} text={labelText}>
        {this.renderTextInput()}
      </LabelGroup>
    )
  };

  renderTextInput = () => {
    const {className, id, onBlur, onFocus, onChange, ref, placeholder, style, value} = this.props;
    return (
      <Input className={classNames('text', className)} id={id}
             onBlur={onBlur} onFocus={onFocus} onChange={compose(onChange, unwrapEventValue)}
             ref={ref} placeholder={placeholder}
             type="text" value={value} style={style}/>
    );
  };

  render() {
    return this.props.labelText ? this.renderWithLabel() : this.renderTextInput();
  }
}

TextInput.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  labelText: PropTypes.string,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  ref: PropTypes.func,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  value: PropTypes.string.isRequired,
};

TextInput.defaultProps = {
  className: null,
  id: null,
  labelText: '',
  onBlur: ident,
  onFocus: ident,
  ref: ident,
  placeholder: '',
  style: {},
};