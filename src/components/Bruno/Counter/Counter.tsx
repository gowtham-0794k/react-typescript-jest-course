import React, { useState } from 'react';

export interface CounterProps {
  description: string;
  defaultCount: number;
}

export function Counter({ description, defaultCount }: CounterProps) {
  const [count, setCount] = useState(defaultCount);
  const [incrementor, setIncrementor] = useState(1);

  return (
    <div>
      <h2>
        DESC: {description} - DC: {defaultCount}
      </h2>
      <label className='m-2'>
        Incrementor:
        <input
          value={incrementor}
          onChange={(evt) => {
            setIncrementor(parseInt(evt.target.value) || 1);
          }}
          type='number'
        />
      </label>
      <br />
      <button
        className='btn btn-primary'
        aria-label='Subtract from Counter'
        onClick={() => setCount(count - incrementor)}
      >
        -
      </button>
      <span className='px-2'>Current Count: {count}</span>
      <button
        className='btn btn-primary'
        aria-label='Add to Counter'
        onClick={() => setCount(count + incrementor)}
      >
        +
      </button>
    </div>
  );
}
