import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import LoginScreen from './Screens/LoginScreen/LoginScreen';
import SignUpScreen from './Screens/SignUpScreen/SignUpScreen';

//ReactDOM.render(<LoginScreen />, document.getElementById('root'));
ReactDOM.render(<SignUpScreen />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
