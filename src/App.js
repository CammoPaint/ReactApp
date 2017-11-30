import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Header from './components/header/Header'
import Users from './components/users/Users'
import Posts from './components/posts/Posts'

class App extends Component {
  constructor() {
    super();
    this.state = {
    };

  }
  render() {
    return (
      <div className="App">
        <Header />    
        <div className="container">
          <Route exact={true} path="/" component={Posts} />
          <Route path="/users" component={Users} />
        </div>
      </div>
    );
  }
}

export default App;