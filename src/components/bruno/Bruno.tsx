import React from "react";
import Counter from "./Counter/Counter";

export default function Bruno() {
  let defaultCount = 2;
  return (
    <div>
      <Counter description="Hello counter !" defaultCount={defaultCount} />
    </div>
  );
}
