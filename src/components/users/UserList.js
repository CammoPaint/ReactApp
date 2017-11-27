import React, { Component } from 'react';

class UserList extends Component {
    constructor(props){
        super(props);
        this.state = { };
    }
  
    render() {
      var items = [];
      if (this.props.isLoaded) {
        this.props.users.forEach((user) => {
          items.push(<UserItem user={user} key={user.id} />);
        });
      }
  
      return (
        <div className="container">
          {items}
        </div>
      )
    }
  }

  export default UserList;

  function UserItem(props) {
    
      return (
    
        <div className="users">
        <div className="panel panel-default">
          <div className="panel-heading">{props.user.username}</div>
          <div className="panel-body">
              <strong>{props.user.name}</strong>
              <p>{props.user.address.street}<br/>
              {props.user.address.suite}<br/>
              {props.user.address.zipcode}</p>
          </div>
        </div>
    </div>
      );
    }