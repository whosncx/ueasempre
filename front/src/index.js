import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginScreen from './Screens/LoginScreen/LoginScreen';
import SignUpScreen from './Screens/SignUpScreen/SignUpScreen';
import StudentsScreen from './Screens/StudentsScreen/StudentsScreen';
import PerfilPage from './Screens/PerfilPage/PerfilPage'


ReactDOM.render(
    <BrowserRouter basename="ueasempre">
      <Switch>
        <Route path="/login" exact={true} component={LoginScreen} />
        <Route path="/cadastro" exact={true} component={SignUpScreen}/>
        <Route path="/alunos" exact={true} component={StudentsScreen}/>
        <Route path="/perfil" exact={true} component={PerfilPage}/>
      </Switch>
    </BrowserRouter>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
