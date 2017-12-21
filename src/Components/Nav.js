import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {  UNAUTH_USER } from '../actions/types';



class Navigation extends Component{
    logoutHandler = ()=>{
        this.props.onClick();
    };
    render() {
        let userAuthStatus = (<li><Link to="/signin" className="navbar-btn btn btn-danger "><span className="glyphicon glyphicon-log-in"></span>Signin </Link></li>);
        if(localStorage.getItem("token")) {
            userAuthStatus = <li><Link to="/signout" className="navbar-btn btn btn-danger "><span className="glyphicon glyphicon-log-in"></span>SignOut </Link></li>
        }
        return (
            <nav className="navbar navbar-toggleable-md navbar-inverse">
                <Link to="/" className="navbar-brand text-primary" id = "logo"> TRASH TO TREASURE</Link>

                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link text-primary" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-primary" to="/post">Posts</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-primary" to="/aboutus">About us</Link>
                        </li>
                        {userAuthStatus}
                    </ul>

                </div>
            </nav>
        );
    };

};
const mapStateToProps = state => {
    return {
        authenticated: state.authenticated
    };
};
const mapDispatchToProps =  dispatch => {
    return {
        onClick : () => dispatch({ type: UNAUTH_USER})
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Navigation);
