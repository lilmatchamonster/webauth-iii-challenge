import React from 'react';
import Axios from "axios";

class Users extends React.Component {
  state = {
    users: [],
  };
  
  componentDidMount() {
    const endpoint = "http://localhost:9000/api/users";
    const token = localStorage.getItem('jwt');
    const reqOptions = {
      headers: {
        authorization: token
      }
    }

    Axios.get(endpoint, reqOptions)
    .then(res => {
      console.log(res.data)
        this.setState({ users: res.data })
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div>
        <h2>Department and Personel Roster</h2>
        <ul>
          { this.state.users.map( user => <li key={user.id}>{user}</li> ) } 
        </ul>
      </div>
    );
  }
}

export default Users;