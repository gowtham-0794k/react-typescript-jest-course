import React from 'react';
import './Input.css';

interface Props {
  onChangeEvent: (data?: any) => void;
  placeHolder: string;
}

export default function Input({ onChangeEvent, placeHolder }: Props) {
  const placeHolderCss = 'removePlaceHolder';

  function onChangeTrigger(event: any) {
    event.preventDefault();
    const value = event.target.value;
    onChangeEvent(value);
  }

  return (
    <div>
      <input
        className={placeHolderCss}
        type='text'
        id='name'
        name='name'
        placeholder={placeHolder}
        onChange={(event) => onChangeTrigger(event)}
      ></input>
    </div>
  );
}
