import React, {Component} from 'react';

/**
 * Authentication component
 */
class Authentication extends Component {

    state = {
        controls : {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'enter email'
                },
                value : '',
                validation : {
                    required : true,
                    isEmail : true
                },
                valid:false,
                touched : false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value : '',
                validation : {
                    required : true,
                    minlength : 6
                },
                valid:false,
                touched : false
            }
        }
    };

    render() {
        return (
            <div className="container offset-3">
 
                <form>
                    <div className="form-group row">
                        <label for = "email" className="col-sm-2 col-form-label"> Email </label>
                        <div>
                            <input type="email" className="form-control" id="email" placeholder="Email"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for = "password" className="col-sm-2 col-form-label"> Password </label>
                        <div>
                            <input type="password" className="form-control" id="password" placeholder="Password"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="offset-sm-2 col-sm-10">
                            <button type="submit" className="btn btn-primary">Sign in</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    };
}

export default Authentication;