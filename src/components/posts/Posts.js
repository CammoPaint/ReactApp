import React, { Component } from 'react';
import PostService from './../../services/PostService'
import PostList from './PostList'
import PostInsert from './PostInsert'

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
          posts: [],
          errors: [],
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
            this.errors.push(response.errors)
        })

        this.handleInsert = this.handleInsert.bind(this);
        this.handleError = this.handleError.bind(this);
    }

    handleInsert(data) {
        console.log("adding the new post to the array");
        var newValues = this.state.posts.concat([data]);
        //newValues.unshift(data);
        this.setState({
            posts: newValues,
            isLoaded: true
        })

        console.log(this.state.posts);
        //this.state.posts.unshift(data);
    }

    handleError(error)
    {
        console.log(error);
        //this.state.errors.push(error);
        var newValues = this.state.errors.concat([error]);
        //newValues.unshift(error);
        this.setState({
            errors: newValues
        })
    }

    render() {
        return (
            <div className="Posts">
            <div>
                <h1>Posts</h1>
                <PostInsert onInsert={this.handleInsert} onError={this.handleError} />
                <PostList posts={this.state.posts} isLoaded={this.state.isLoaded} />
            </div>
            </div>
        );
    }
}

export default Posts;