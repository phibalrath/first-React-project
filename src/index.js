import React from 'react';
import ReactDOM from 'react-dom';
//Start of Redux Imports
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from './reducers/reducers'
//End of Redux Imports

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//Add Functionalities to use Redux

//Provider is the React Redux so it connects the Redux to React. Provides Store to this component which in this case is <App>. 
//Provides Store to whatever it wraps around. In this case, store is made available to app
//Within Provider, you have created a store named "store". In that store is the reducers that you've made in "reducers" where you will 
//store the data as sets of keys and reducers
ReactDOM.render(<Provider store={createStore(reducers)}><App /></Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

