import React from 'react';
import ButtonClass from './Button_01.module.css';

interface Props {
  label: string;
}

export default function Button_01({ label }: Props) {
  return (
    <div data-testid='button' className={ButtonClass.buttonStyle}>
      {label}
    </div>
  );
}
