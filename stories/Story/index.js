import React from 'react';
// import 'scss/_reset.scss';
import 'scss/style.scss';

export default function Story({ renderStory }) {
  return renderStory();
}

require('scss/classes/_all.scss');