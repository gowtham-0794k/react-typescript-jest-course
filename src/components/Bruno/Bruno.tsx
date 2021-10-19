import React from 'react';
import { Counter } from './Counter/Counter';

export default function Bruno() {
  const count = 0;
  return (
    <div>
      <Counter description='My counter' defaultCount={count} />
    </div>
  );
}
