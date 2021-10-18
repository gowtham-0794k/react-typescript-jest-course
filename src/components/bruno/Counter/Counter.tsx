import React, { useState } from "react";

export interface CounterProps {
  description: string;
  defaultCount: number;
}

export default function Counter({ description, defaultCount }: CounterProps) {
  const [count, setCount] = useState(defaultCount);
  return (
    <div>
      <h2>
        DESC : {description} - DC : {defaultCount}
      </h2>
      <button
        style={{
          border: "1px solid grey",
          padding: "10px",
          backgroundColor: "grey",
          color: "white",
          fontSize: "25px",
        }}
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
      <span style={{ padding: "10px" }}>Current Count : {count}</span>
      <button
        style={{
          border: "1px solid grey",
          padding: "10px",
          backgroundColor: "grey",
          color: "white",
          fontSize: "25px",
        }}
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </div>
  );
}
