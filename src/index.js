import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';
import 'bulma/css/bulma.css';
import './styles.scss';
import * as reducers from './state/reducers';

const combinedReducer = combineReducers({
    state: reducers.stateReducer
});

const store = createStore(
    combinedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)


const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, rootElement);
