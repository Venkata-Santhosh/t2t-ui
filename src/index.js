import './index.css';
import App from './App';
import rootReducer from './reducers/Index';
//import AuthReducer from './store/reducers/AuthReducer'

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';




import registerServiceWorker from './registerServiceWorker';


/*import all reducers ...
const rootReducer = combineReducers({
    first: AuthReducer,
    second: reducer
});*/

/**
 * creates application store - used for Redux
 * @type {StoreEnhancerStoreCreator<any>}
 */
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);

/**
 * Renders whole application to div root element
 */
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
