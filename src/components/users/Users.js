import React, { Component } from 'react';
import UserService from './../../services/UserService'
import UserList from './UserList'

class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: {},
      errors: {},
      isLoaded: false
    };

  }

  componentDidMount() {
    // get the data from the service
    UserService.get((data) => {
      this.setState({
        users: data,
        isLoaded: true
      });
      }, (response) => {
        this.errors.push(response.errors)
      })
  }

  render() {
    return (
      <div className="Users">
        <div>
          <h1>Users</h1>
            <UserList users={this.state.users} isLoaded={this.state.isLoaded} />
        </div>
      </div>
    );
  }
}

export default Users;
