import React from 'react';

interface ButtonProps {
  onClick: () => void;
  label: String;
  className: any;
}

export default function Button({ onClick, label, className }: ButtonProps) {
  return (
    <>
      <button className={className} onClick={onClick}>
        {label}
      </button>
    </>
  );
}
