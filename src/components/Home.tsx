import React from "react";
import Button from "./atomic/atom/button/Button";

export class Home extends React.Component {
  render() {
    const buttonProps = {
      id: 1,
      label: "Login",
    };
    return (
      <div className="pt-2">
        <Button label="Login" />
      </div>
    );
  }
}
