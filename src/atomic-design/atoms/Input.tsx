import React from 'react';

interface Props {
  onChangeEvent: (data?: any) => void;
}

export default function Input({ onChangeEvent }: Props) {
  function onChangeTrigger(event: any) {
    // event.preventeDefault();
    const value = event.target.value;
    console.log({ value });
    onChangeEvent(value);
  }

  return (
    <div>
      <input
        type='text'
        id='name'
        name='name'
        onChange={(event) => onChangeTrigger(event)}
      ></input>
    </div>
  );
}
