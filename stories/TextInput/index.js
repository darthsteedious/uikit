import React from 'react';
import {storiesOf} from '@storybook/react';
import {ident} from 'js/util';
import render from 'stories/render';
import {renderWithState} from 'stories/withState';
import TextInput from 'js/TextInput';

storiesOf('TextInput', module)
  .add('pristine', render(<TextInput onChange={ident} value=""/>))
  .add('with label', render(<TextInput id="field_a" onChange={ident} value="" labelText="Field A"/>))
  .add('with placeholder', render(<TextInput onChange={ident} value="" placeholder="Enter some text..."/>))
  .add('with text', render(<TextInput onChange={ident} value="Lorem ipsum"/>))
  .add('interactive', renderWithState(props => <TextInput {...props} />, {value: ''}))
  .add('interactive (with label)', renderWithState(props => (
    <TextInput id="input_field" labelText="TextInput Field" {...props} />
  ), {value: ''}));