import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {ident} from 'js/util';
import render from 'stories/render';
import {renderWithState} from 'stories/withState';
import Button from 'js/Button';

storiesOf('Button', module)
  .add('with text (default)', render(<Button onClick={ident}>Action</Button>))
  .add('with click', render(<Button onClick={action(`Button 'Action' clicked`)}>Action</Button>));