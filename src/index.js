import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, } from 'redux';
import { Provider } from 'react-redux';

const consoleLogger = (state = [], action) => {
    if (action.type === 'ADD_CUSTOMER') {
        console.log(action.payload)
    }
    return state
}

const storeInstance = createStore(
    combineReducers({
        consoleLogger
    })
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
