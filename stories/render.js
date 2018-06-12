import React from 'react';
import Story from './Story';

export default (el) => () => <Story renderStory={() => el} />;