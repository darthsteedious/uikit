import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Input from 'js/Input';
import labelGroup from 'js/decorators/labelGroup';

import './_textinput.scss';

@labelGroup(p => ({
  htmlFor: p.id,
  text: p.labelText,
  className: ''
}))
export default class TextInput extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    labelText: PropTypes.string,
  };

  static defaultProps = {
    className: '',
    labelText: '',
  };

  setRef = el => this.ref = el;

  onChange = e => {
    const { onChange } = this.props;

    onChange(e.target.value);
  };

  render() {
    const { className, value, ...rest } = this.props;
    return (
      <Input
        {...rest}
        className={classNames('text', className)}
        onChange={this.onChange}
        ref={this.setRef}
        value={value}
      />
    );
  }
}