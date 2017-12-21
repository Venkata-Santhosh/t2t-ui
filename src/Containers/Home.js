import React, { Component } from 'react';
import {connect} from 'react-redux';
import HeroContent from "../Components/HeroContent";

class Home extends Component {
    render() {
        return (
            <div>
                <h1>WELCOME {localStorage.getItem("user")}</h1>
            </div>
        );
    }
};

//which part of state is interesting to us want to get
const mapStateToProps = state => {
  return {
    ctr: state.counter
  };
};
//changes all this
//which action do i want to dispatch
const mapDispatchToProps =  dispatch => {
    return {
      onChange : () => dispatch({type:'', })
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Home);
