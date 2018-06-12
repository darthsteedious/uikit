import React from 'react';
import classNames from 'classnames';
import Label from 'js/Label';
import './style.scss';

export default function LabelGroup(props) {
  const {children, htmlFor, text} = props;
  return (
    <div className="label-group">
      <Label htmlFor={htmlFor}>{text}</Label>
      {children}
    </div>
  )
}