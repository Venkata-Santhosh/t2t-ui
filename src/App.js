import React, { Component } from 'react';
import './css/bootstrap.css';
import './css/style.css';
import {BrowserRouter} from 'react-router-dom';
import AppContainer from './Containers/AppContainer';
import {Provider} from 'react-redux';

/**
 * Application component which renders whole application
 */
class App extends Component {
  render() {
    return (
        <BrowserRouter>

                <div className="container">
                    <AppContainer/>
                </div>
        </BrowserRouter>
    );
  }
}

export default App;
