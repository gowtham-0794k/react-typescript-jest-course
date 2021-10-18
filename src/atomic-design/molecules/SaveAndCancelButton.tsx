import React from 'react';
import Button from '../atoms/Button/Button';

interface Props {
  onSave: () => void;
  onCancel: () => void;
}

export default function SaveAndCancelButton({ onSave, onCancel }: Props) {
  const buttonSaveClass = 'btn btn-primary m-2';
  const buttonCancelClass = 'btn btn-secondary';

  return (
    <div>
      <h4>Save cancel buttons</h4>
      <Button onClick={onSave} label='Save' className={buttonSaveClass} />
      <Button onClick={onCancel} label='Cancel' className={buttonCancelClass} />
    </div>
  );
}
