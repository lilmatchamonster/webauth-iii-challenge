import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import './App.css';
import Users from "./users/Users";
import Login from "./login/Login";
import Register from "./register/Register";

class App extends Component {

  logout = () => {
    localStorage.removeItem('jwt');

    this.props.history.push('/login');
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Department Personel</h1>
          <NavLink to="/api/login">Login</NavLink> 
          |   | 
          <NavLink to="/api/register">Register</NavLink> 
          |   | 
          <button onClick={this.logout}>Logout</button>
        </header>
        <div>
          <Route path="/api/register" component={Register}></Route>
          <Route path="/api/login" component={Login}></Route>
          <Route path="/api/users" component={Users}></Route>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
