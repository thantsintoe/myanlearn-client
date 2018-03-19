import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions';
import { connect } from 'react-redux';

class Signin extends Component {
    handleFormSubmit( {username, password }) {
        this.props.signinUser({ username, password})
    }

    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>Oops !</strong> {this.props.errorMessage}
                </div>
            )
        }
    }
    
    render() {
        const { handleSubmit, fields: { username, password }} = this.props;
        return (

            <div className="form-container">
                <h2>Log In</h2>
                <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                    { this.renderAlert()}
                    <fieldset className="form-group">
                        <label htmlFor="">Username</label>
                        <Field className="form-control" name="username" component="input" type="text"/>
                    </fieldset>
                    <fieldset className="form-group">
                        <label htmlFor="">Password</label>
                        <Field className="form-control" name="password" component="input" type="password"/>       
                    </fieldset>
                    
                    <button action="submit" className="btn btn-primary">Log in</button>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        errorMessage: state.auth.error
    }
}

Signin = reduxForm({ form: 'sigin', fields: [ 'username', 'password' ] })(Signin);
export default connect(mapStateToProps, actions)(Signin);
