import React, { Component } from 'react';
import { Route} from 'react-router-dom';
import Navigation from "../Components/Nav";
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import AboutUsPage from './pages/AboutUsPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import DefaultPage from "./pages/DefaultPage";

import Authentication from './Authentication/Authentication';
import SignOut from "../Components/SignOut";
import AddPost from "../Components/AddPost";
import Home from "./Home";

class AppContainer extends Component {
    render(){
        return (
            <div className="row">
                <Navigation/>

                <Route path="/"  exact component={HomePage} />
                <Route path="/post"  component={PostPage} />
                <Route path="/aboutus"  component={AboutUsPage} />
                <Route path="/signin"  component={SignInPage} />
                <Route path="/signup"  component={SignUpPage} />
                <Route path="/signout"  component={SignOut} />
                <Route path="/addPost"  component={AddPost} />
                <Route path="/home"  component={Home} />


            </div>
        );
    };

}
export default AppContainer;