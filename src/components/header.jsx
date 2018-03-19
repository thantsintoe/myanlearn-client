import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {
    renderLinks() {
        if (this.props.authenticated) {
            return (
                <li className="nav-item">
                   <Link to="/signout" className="nav-link">Sign Out</Link>
                </li>
            )  
        } else {
            return [
                <li className="nav-item" key={1}>
                   <Link to="/signup" className="nav-link">Register</Link>
                </li>,
                <li className="nav-item" key={2}>
                    <Link to="/signin" className="nav-link">Log In</Link>
                </li>
            ]
        }
    }
    
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <Link to="/" className="navbar-brand">MyanLearn</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
               <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav ml-auto">
                        <li className="nav-item" key={3}>
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item" key={4}>
                            <Link to="/feature" className="nav-link">Tweets</Link>
                        </li>
                        { this.renderLinks() }
                        
                    </ul>
                </div>  
            </nav>
        )
    }
}

function mapStateToProps(state) {
    return {
        authenticated : state.auth.authenticated
    }
}

export default connect(mapStateToProps)(Header);