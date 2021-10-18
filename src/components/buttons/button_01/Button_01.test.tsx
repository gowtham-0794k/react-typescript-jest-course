import React from 'react';
import ReactDOM from 'react-dom';
import Button_01 from './Button_01';

it('Render component ', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button_01 label='Hello Button !'></Button_01>, div);
});
