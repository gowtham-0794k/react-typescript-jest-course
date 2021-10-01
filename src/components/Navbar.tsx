import React from "react";
import { Link } from "react-router-dom";
import { User } from "../model/Models";

export class Navbar extends React.Component<{ user: User | undefined }> {
  render() {
    let loginLogout: any;

    if (this.props.user) {
      loginLogout = <Link to="/logout">{this.props.user.email}</Link>;
    } else {
      loginLogout = <Link to="/login">Login !</Link>;
    }

    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/profile"></Link>
        {loginLogout}
      </div>
    );
  }
}
