import React from 'react';
import { store } from './redux/redux';
// import { createStore } from 'redux'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// const App = require("./App")
import {BrowserRouter as Router} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
const Provider = require("react-redux").Provider;


ReactDOM.render(
    < Provider store={store} > 
        <Router>
            <App />
        </Router>
   </Provider >, document.getElementById('root'));

serviceWorker.unregister();
