import React from 'react';

interface Props {
  label: string;
}

export default function Button_01({ label }: Props) {
  return <div data-testid='button'>{label}</div>;
}
