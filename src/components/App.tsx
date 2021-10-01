import React from "react";
import { User } from "../model/Models";
import { AuthService } from "../services/AuthService";
import { Login } from "./Login";

interface AppState {
  user: User | undefined;
}

export class App extends React.Component<{}, AppState> {
  private authService: AuthService = new AuthService();

  constructor(props: any) {
    super(props);
    this.setUser = this.setUser.bind(this);
  }

  private setUser(user: User) {
    console.log("user data in parent component : " + JSON.stringify(user));
    this.setState({ user: user });
  }

  render() {
    return (
      <div>
        <Login authService={this.authService} setUser={this.setUser} />
      </div>
    );
  }
}
