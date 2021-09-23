import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import { rootReducer } from './redux/rootReducer';
import { Provider } from 'react-redux';


const container = document.querySelector('#root')
// const initialState = []
const store = createStore(
        rootReducer, 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store= {store}>
        <App/>
    </Provider>,
    container)