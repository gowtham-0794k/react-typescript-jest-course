import { render, screen } from "@testing-library/react";
import Hello from "./Hello";

test("render hello component", () => {
  render(<Hello />);
  const myElement = screen.getByText("Hello world !");
  expect(myElement).toBeInTheDocument();
});
