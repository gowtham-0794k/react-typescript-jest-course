import { render, screen } from "@testing-library/react";
import Counter from "./Counter";

test("default count = 2, ", () => {
  render(<Counter description="Hello counter !" defaultCount={2} />);
  expect(screen.getByText("Current Count : 2")).toBeInTheDocument();
  expect(screen.getByText(/Hello counter !/i)).toBeInTheDocument();
});
