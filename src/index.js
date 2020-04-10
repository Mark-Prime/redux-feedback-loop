import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, } from 'redux';
import { Provider } from 'react-redux';

const formSubmit = (state = {}, action) => {
    if (action.type === 'UPDATE_STATE') {
        state = {
            ...state,
            [action.payload.key]: action.payload.value,
        }
    }
    return state
}

const storeInstance = createStore(
    combineReducers({
        formSubmit
    })
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
