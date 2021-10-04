import ReactDOM from "react-dom";
import { Login } from "../../src/components/Login";
import { fireEvent } from "@testing-library/react";

describe("Login component test suite", () => {
  let container: HTMLDivElement;
  const authServiceMock = {
    login: jest.fn(),
  };

  const setUserMock = jest.fn();

  beforeAll(() => {
    console.log("before all !");
  });

  afterAll(() => {
    console.log("after all !");
  });

  beforeEach(() => {
    console.log("before each !");
    container = document.createElement("div");
    document.body.appendChild(container);
    ReactDOM.render(
      <Login authService={authServiceMock as any} setUser={setUserMock} />,
      container
    );
  });

  afterEach(() => {
    console.log("after each !");
    document.body.removeChild(container);
    container.remove();
    jest.clearAllMocks();
  });

  test("Renders correctly initial document", () => {
    const title = document.querySelector("h2");
    expect(title!.textContent).toBe("Please login");

    const inputs = document.querySelectorAll("input");
    expect(inputs).toHaveLength(3);
    expect(inputs[0].value).toBe("");
    expect(inputs[1].value).toBe("");
    expect(inputs[2].value).toBe("Login");

    const label = document.querySelector("label");
    expect(label).not.toBeInTheDocument();
  });

  test("Passing cred", () => {
    const inputs = document.querySelectorAll("input");
    const idInput = inputs[0];
    const passwordInput = inputs[1];
    const loginButton = inputs[2];

    fireEvent.change(idInput, { target: { value: "someUser" } });
    fireEvent.change(passwordInput, { target: { value: "somePass" } });
    fireEvent.click(loginButton);

    expect(authServiceMock.login).toBeCalledWith("someUser", "somePass");
  });
});
