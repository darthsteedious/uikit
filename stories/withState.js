import React from 'react';
import PropTypes from 'prop-types';
import render from './render';

class StatefulWrapper extends React.Component {
  static propTypes = {
    initialState: PropTypes.object,
    render: PropTypes.func.isRequired,
  };

  static defaultProps = {
    initialState: {}
  };

  constructor(...args) {
    super(...args);

    const [props] = args;

    this.state = props.initialState;
  }

  onChange = (e) => {
    this.setState({value: e.target.value});

    if (this.props.onChange) this.props.onChange(e);
  };

  onBlur = (e) => {
    this.setState({focused: false});

    if (this.props.onBlur) this.props.onBlur(e);
  };

  onFocus = (e) => {
    this.setState({focused: true});

    if (this.props.onFocus) this.props.onBlur(e);
  };

  render() {
    const { onBlur, onChange, onFocus } = this;
    const { render } = this.props;
    const { value, focused } = this.state;

    return render({
      onBlur,
      onChange,
      onFocus,
      value,
      focused,
    })
  }
}

export const withState = (render, initialState) => (
  <StatefulWrapper render={render} initialState={initialState} />
);

export const renderWithState = (func, initialState={}) => render(withState(func, initialState));

export default withState;