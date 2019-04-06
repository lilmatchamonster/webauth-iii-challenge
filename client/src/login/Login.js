import React, {Component} from 'react';
import Axios from "axios";


class Login extends Component {
  state = {
    usernmane: "",
    password: ""
  }

  changeHandler = event => {
    const {name, value} = event.target;

    this.setState({ [name]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    
    const endpoint = "http://localhost:9000/api/login";

    Axios.post(endpoint, this.state)
    .then(res => {
      localStorage.setItem('jwt', res.data.token);

      this.props.history.push('/users');
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username"></label>
            <input 
              name="username" 
              id="username" 
              value={this.state.username} 
              onChange={this.changeHandler} 
              type="text">
            </input>
          </div>
          <div>
            <label htmlFor="password"></label>
            <input 
              name="password" 
              id="password" 
              value={this.state.password} 
              onChange={this.changeHandler} 
              type="password">
            </input>
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Login;