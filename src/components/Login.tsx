import React, { SyntheticEvent } from "react";
import { User } from "../model/Models";
import { AuthService } from "../services/AuthService";

interface LoginProps {
  authService: AuthService;
  setUser: (user: User) => void;
}

interface LoginState {
  userName: string;
  password: string;
  loginAttempted: boolean;
  loginSuccessfull: boolean;
}

interface CustomEvent {
  target: HTMLInputElement;
}

export class Login extends React.Component<LoginProps, LoginState> {
  state: LoginState = {
    userName: "",
    password: "",
    loginAttempted: false,
    loginSuccessfull: false,
  };

  private setUserName(event: CustomEvent) {
    this.setState({ userName: event.target.value });
  }

  private setPassword(event: CustomEvent) {
    this.setState({ password: event.target.value });
  }

  private async handelSubmit(event: SyntheticEvent) {
    event.preventDefault();
    this.setState({ loginAttempted: true });
    const result = await this.props.authService.login(
      this.state.userName,
      this.state.password
    );

    if (result) {
      console.log("result after login : " + JSON.stringify(result));
      this.setState({ loginSuccessfull: true });
      this.props.setUser(result);
    } else {
      console.log("error : " + JSON.stringify(result));
      this.setState({ loginSuccessfull: false });
    }
  }

  render() {
    let loginMessage: any;

    if (this.state.loginAttempted) {
      if (this.state.loginSuccessfull) {
        loginMessage = <label>Login successfull !</label>;
      } else {
        loginMessage = <label>Login unsuccessfull !</label>;
      }
    }
    return (
      <div>
        <h2>Login</h2>
        {loginMessage}
        <form action="" onSubmit={(e) => this.handelSubmit(e)}>
          <input
            type="text"
            value={this.state.userName}
            onChange={(e) => this.setUserName(e)}
          />
          <br />
          <input
            type="password"
            value={this.state.password}
            onChange={(e) => this.setPassword(e)}
          />
          <br />
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}
