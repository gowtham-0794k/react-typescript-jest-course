import React from 'react';
import Button from '../atomic-design/atoms/Button';
import Input from '../atomic-design/atoms/Input';
import SaveAndCancelButton from '../atomic-design/molecules/SaveAndCancelButton';

export default function Atomic() {
  const buttonClass = '5px auto -webkit-focus-ring-color';

  function handelSave() {
    console.log('parent handel save !');
  }

  function handelCancel() {
    console.log('parent handel cancel !');
  }

  function handelOnChange(val: any) {
    console.log('parent handel onchange : ' + JSON.stringify(val));
  }

  return (
    <div>
      <h3>Button Component !</h3>
      <div>
        <SaveAndCancelButton onSave={handelSave} onCancel={handelCancel} />
      </div>

      <h3>Input</h3>
      <Input onChangeEvent={(val) => handelOnChange(val)} />
    </div>
  );
}
