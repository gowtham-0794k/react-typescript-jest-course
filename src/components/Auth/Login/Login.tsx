import React from 'react';
import Button from '../../../atomic-design/atoms/Button/Button';
import Input from '../../../atomic-design/atoms/Input/Input';

export default function Login() {
  const onEventChange = (event: any) => {
    console.log({ event });
  };

  function getFormData() {
    console.log('Submit');
  }
  return (
    <div>
      <form onSubmit={getFormData}>
        <div>
          <Input onChangeEvent={onEventChange} placeHolder='Enter Email !' />
        </div>{' '}
        <div>
          <Input onChangeEvent={onEventChange} placeHolder='Enter Password !' />
        </div>
      </form>
      {/* <Button onClick={getFormData} className='' label='Login' /> */}
      <button type='submit'>Login</button>
    </div>
  );
}
