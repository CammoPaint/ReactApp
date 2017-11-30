import React, { Component } from 'react';
import PostService from './../../services/PostService'
import PostList from './PostList'
import PostInsert from './PostInsert'
import Alerts from './../alerts/Alerts'

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
          posts: [],
          alerts: [],
          isLoaded: false
        };
    
      }

    componentDidMount() {
    // get the data from the service
    PostService.get((data) => {
        this.setState({
            posts: data,
            isLoaded: true
        });
        }, (response) => {
            // create an error alert
            this.addAlert('warning',response.name,response.description,5000);
        })
        
        this.handleInsert = this.handleInsert.bind(this);
        this.handleError = this.handleError.bind(this);
    }

    handleInsert(data) {
        var newValues = this.state.posts.concat([data]);
        this.addAlert('success','Success','New record added',5000);

        this.setState({
            posts: newValues,
            isLoaded: true,
        })
    }

    handleError(error)
    {
        // add an error alert
        this.addAlert('danger',error.name,error.description,5000);
    }

    addAlert(type,title,msg,duration) {
        // add an alert to the alerts array
        var alerts = this.state.alerts.slice()
        alerts.push({key: new Date().getTime(), type: type, msg: msg, title: title, duration: duration})
        this.setState({
            alerts: alerts
        })
    }

    render() {
        return (
            <div className="Posts">
            <div>
                <Alerts alerts={this.state.alerts} />
                <h1>Home</h1>
                <PostInsert onInsert={this.handleInsert} onError={this.handleError} />
                <PostList posts={this.state.posts} isLoaded={this.state.isLoaded} />
            </div>
            </div>
        );
    }
}

export default Posts;