import React from 'react';
import ReactDOM from 'react-dom';
import { Code128 } from '../lib/index';

const TRUE = true;

ReactDOM.render(
  <Code128
    value='1234567891234'
    displayValue={TRUE}
    size={1}
    type='C'
    color='black'
    fontSize='0.125in'
    fontColor='black'
  />,
  document.getElementById('root')
);
