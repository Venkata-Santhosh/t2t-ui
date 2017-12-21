import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { registerUser } from '../actions/Authentication';

const form = reduxForm({
    form: 'register',
    validate,
});

const renderField = field => (
    <div>
        <input className="form-control" {...field.input} />
        {field.touched && field.error && <div className="error">{field.error}</div>}
    </div>
);

function validate(formProps) {
    const errors = {};

    if (!formProps.username) {
        errors.firstName = 'Please enter a username name';
    }

    if (!formProps.password) {
        errors.password = 'Please enter a password';
    }

    return errors;
}

class SignUp extends Component {
    handleFormSubmit(formProps) {
        this.props.registerUser(formProps);
    }

    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div>
                    <span><strong>Error!</strong> {this.props.errorMessage}</span>
                </div>
            );
        }
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                {this.renderAlert()}
                <div className="row">
                    <div className="col-md-12">
                        <label>User Name</label>
                        <Field name="username" className="form-control" component={renderField} type="text" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <label>Password</label>
                        <Field name="password" className="form-control" component="input" type="password" />
                    </div>
                </div>
                <div className="invisible">
                    <Field name="authorities" value="ROLE_USER" component="input" type="text"/>
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {
        errorMessage: state.auth.error,
        message: state.auth.message,
        authenticated: state.auth.authenticated,
    };
}

export default connect(mapStateToProps, { registerUser })(form(SignUp));