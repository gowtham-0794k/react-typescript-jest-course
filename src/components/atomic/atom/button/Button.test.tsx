import { render } from "@testing-library/react";
import Button from "./Button";

describe("<Button />", () => {
  test("should display button with a label", () => {
    const { getByRole } = render(<Button label="Login" />);

    expect(getByRole("button")).toBeInTheDocument();
  });
});
