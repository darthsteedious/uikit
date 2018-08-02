import React from 'react'
import PropTypes from 'prop-types';
import LabelGroup from 'js/LabelGroup';

export default (labelPropsSelector) => (Wrapped) => class LabelGroupControl extends React.Component {
  static propTypes = {
    labelClassName: PropTypes.string,
  };

  static defaultProps = {
    labelClassName: '',
  };

  renderWithLabel() {
    const { text, htmlFor, className = '' } = labelPropsSelector(this.props);

    return (
      <LabelGroup className={className}  htmlFor={htmlFor} text={text} >
        <Wrapped {...this.props} />
      </LabelGroup>
    )
  }

  render() {
    if (labelPropsSelector(this.props).text) return this.renderWithLabel();

    return (
      <Wrapped {...this.props} />
    );
  }
}