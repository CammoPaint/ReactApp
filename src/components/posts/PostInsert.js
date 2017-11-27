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
        const post = {
            title: this.state.title,
            body: this.state.body

        };
        PostService.post(post, (data) => {
            // send the new record up to component tree
            this.props.onInsert(data);
            // show the alert
            //this.alerts.push({key: new Date().getTime(), type: 'success', msg: 'New record added', title: 'Success', duration: 5000})
            this.setState ({
                title: '',
                body: ''
            });
          }, (response) => {
            this.props.onError(response);
          })

        event.preventDefault();
      }

    render() {
        return (
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
        );
    }
}

export default PostInsert;