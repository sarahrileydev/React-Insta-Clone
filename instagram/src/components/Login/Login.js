import React from "react";

class Login extends React.Component {
  constructor() {
    super();
    this.state ={
      username: ""
    }
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value});
  };

  login = (e) => {
    e.preventDefault();
    const username = {
      username: this.state.username
    };
    this.setState({
      username,
      username: ""
    })
    localStorage.setItem("username", this.state.username);
  }

  render() {
    return (
    <div className="login-form">
      <h1>Hello</h1>
      <form>
        <input 
        className="login-input"
        name="username"
        placeholder="username"
        value={this.state.username}
        onChange={this.handleChanges}
        />
        <input
        className="login-input"
        name="password"
        placeholder="password"
        />
        <button onClick={this.login}>Login</button>
      </form>
    </div>
    )
  }
}

export default Login;