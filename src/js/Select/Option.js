import React from 'react';
import PropTypes from 'prop-types';

export default function Option({ text, value }) {
  return (
    <option value={value}>{text}</option>
  )
}

Option.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};