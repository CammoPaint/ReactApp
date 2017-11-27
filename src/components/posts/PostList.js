import React, { Component } from 'react';

class PostList extends Component {
    constructor(props){
        super(props);
        this.state = { };
    }
  
    render() {
      var items = [];
      if (this.props.isLoaded) {
        this.props.posts.forEach((post) => {
          items.push(<PostItem post={post} key={post.id} />);
        });
      }
  
      return (
        <div className="container">
          {items}
        </div>
      )
    }
  }

  export default PostList;

  function PostItem(props) {
    
      return (
        <div className="posts">
            <div className="panel panel-default">
            <div className="panel-heading">{props.post.title}</div>
            <div className="panel-body">
                {props.post.body}
            </div>
            </div>
        </div>
      );
    }