import React from 'react';
import Button from '../atoms/Button';

interface Props {
  onSave: () => void;
  onCancel: () => void;
}

export default function SaveAndCancelButton({ onSave, onCancel }: Props) {
  const buttonClass = '5px auto -webkit-focus-ring-color';

  return (
    <div>
      <h4>Save cancel buttons</h4>
      <Button onClick={onSave} label='Save' className={buttonClass} />
      <Button onClick={onCancel} label='Cancel' className={buttonClass} />
    </div>
  );
}
