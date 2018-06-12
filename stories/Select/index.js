import React from 'react';
import {storiesOf} from '@storybook/react';
import Select, { Option } from 'js/Select';
import {ident} from 'js/util';
import render from "stories/render";

storiesOf('Select', module)
  .add('pristine', render(
    <Select value="" onChange={ident}>
      <Option text="Select a value" value="" />
    </Select>
  ));