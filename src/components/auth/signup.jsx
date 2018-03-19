import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions';
import { connect } from 'react-redux';

// hoisted up not to render each time from scratch in the component (which would result in loosing focus)
const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <fieldset className="form-group">
      <label htmlFor={input.name}>{label}</label>
      <input className="form-control" {...input} type={type}/>
      { touched && error && <span className="text-danger">{error}</span> }
    </fieldset>
  )


class Signup extends Component {
    handleFormSubmit( {username, password }) {
        this.props.signupUser({ username, password})
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
        const { handleSubmit, fields: { username, password, passwordConfirm }} = this.props;

        return (

            <div className="form-container">
                <h2>Register New User</h2>
                {this.renderAlert()}
                <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                    <Field name="username" component={renderField} type="username" label="Username"/>
                    <Field name="password" component={renderField} type="password" label="Password"/>
                    <Field name="passwordConfirm" component={renderField} type="password" label="Password Confirmation"/>
                    <button type="submit" className="btn btn-primary">Register</button>
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

function validate(values) {
    const errors = {};

    if (!values.username) {
        errors.username = 'Please enter a username';
    }

    if (!values.password) {
        errors.password = 'Please enter your password';
    }

    if (!values.passwordConfirm) {
        errors.passwordConfirm = 'Please confirm your password';
    }
    if (values.password != values.passwordConfirm) {
        errors.password = 'Password and password confirmation don\'t match!'
    }

    if( /[^a-zA-Z0-9\-\/]/.test( values.username ) ) {
        errors.username = 'Invalid Username. Spaces and special characters are not allowed.';
    }
    return errors;
}

Signup = reduxForm({ 
    form: 'signup', 
    fields: [ 'username', 'password', 'passwordConfirm' ],
    validate
})(Signup);
export default connect(mapStateToProps, actions)(Signup);
