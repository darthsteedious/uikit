import React from 'react'
import PropTypes from 'prop-types';
import Label from 'js/Label';

export default (labelPropsSelector) => (Wrapped) => class DecoratedWithLabel extends React.Component {
  static propTypes = {
    labelClassName: PropTypes.string,
  };

  static defaultProps = {
    labelClassName: '',
  };

  renderWithLabel() {
    const {text, htmlFor, className = ''} = labelPropsSelector(this.props);

    return (
      <div className="label-control">
        <Label className={className} htmlFor={htmlFor}>{text}</Label>
        <Wrapped {...this.props} />
      </div>
    )
  }

  render() {
    if (labelPropsSelector(this.props).text) return this.renderWithLabel();

    return (
      <Wrapped {...this.props} />
    );
  }
}