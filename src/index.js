import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { legacy_createStore as createStore} from 'redux'
import allReducer from './reducers'
import {Provider} from 'react-redux'

const store = createStore(allReducer);

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, document.getElementById('root'));