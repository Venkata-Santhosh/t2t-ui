import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { addPost } from '../actions/Authentication';



const form = reduxForm({
    form: 'addPost',
    validate,
});

function validate(formProps) {
    const errors = {};

    if (!formProps.title) {
        errors.title = 'Please enter a title ';
    }

    if (!formProps.description) {
        errors.description = 'Please enter a description';
    }
    if (!formProps.imageURL) {
        errors.imageURL = 'Please enter a imageUrl';
    }
    return errors;
}


const renderField = field => (
    <div>
        <input className="form-control" {...field.input} />
        {field.touched && field.error && <div className="error">{field.error}</div>}
    </div>
);

class AddPost extends Component {
    handleFormSubmit(formProps) {
        this.props.addPost(formProps);
    }
addPost
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
                        <label>Title</label>
                        <Field name="title" className="form-control" component={renderField} type="text" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <label>Description</label>
                        <Field name="description" className="form-control" component={renderField} type="text" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <label>Image URL</label>
                        <Field name="imageURL" className="form-control" component={renderField} type="text" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <label>Category</label>
                        <Field name="category" className="form-control" component={renderField} type="text" />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Add Post</button>
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

export default connect(mapStateToProps, { addPost })(form(AddPost));