import React, { Component } from 'react';
import PostService from './../../services/PostService'

class PostInsert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

    handleSubmit(event) {
        // create a new Post object
        const post = {
            title: this.state.title,
            body: this.state.body
        };
        // call the service method
        PostService.post(post, (data) => {
            // send the new record up to component tree
            this.props.onInsert(data);
            // clear the item
            this.setState ({
                title: '',
                body: ''
            });
          }, (response) => {
              this.props.onError(response); // send the error back to the parent to handle
          })

        event.preventDefault();
      }

    render() {
        return (
            <div className="well">
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" placeholder="Title" value={this.state.title} name="title" onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="body">Body</label>
                    <input type="text" className="form-control" id="body" placeholder="Body" value={this.state.body} name="body" onChange={this.handleInputChange}  />
                </div>
            <button type="submit" className="btn btn-default">Submit</button>
            </form>
            </div>
        );
    }
}

export default PostInsert;