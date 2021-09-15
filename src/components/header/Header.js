import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {

    render() {
        return (
            <div className="App">
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="/">My React App</a>
                        </div>
                        <div id="navbar" className="collapse navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li><Link to="/users" className="nav-item">Users</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    };
}

export default Header;