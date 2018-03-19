import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions';
import { connect } from 'react-redux';

class Signout extends Component {
    
    componentWillMount() {
        this.props.signoutUser()
    }

    render() {
        return (
            <div id="welcome-page">
                <h1 className="display-4">Goodbye...hope to work <strong>Together</strong></h1>
                <p>View Source Code on <a href="https://github.com/thantsintoe?tab=repositories">GitHub</a></p>

            </div>
        )
    }
}

export default connect(null, actions)(Signout)