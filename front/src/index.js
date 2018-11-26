import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginScreen from './Screens/LoginScreen/LoginScreen';
import SignUpScreen from './Screens/SignUpScreen/SignUpScreen';
import StudentsScreen from './Screens/StudentsScreen/StudentsScreen';
import PerfilPage from './Screens/PerfilPage/PerfilPage'
import ProfileScreen from './Screens/ProfileScreen/ProfileScreen';
import PublicHomeScreen from './Screens/PublicHomeScreen/PublicHomeScreen';

// import Teste from './Screens/Teste/Teste'

ReactDOM.render(
    <BrowserRouter basename="ueasempre">
      <Switch>
        <Route path="/login" exact={true} component={LoginScreen} />
        <Route path="/cadastro" exact={true} component={SignUpScreen}/>
        <Route path="/alunos" exact={true} component={StudentsScreen}/>
        <Route path="/perfil/:aluno" exact={true} component={ProfileScreen}/>
        <Route path="/perfil" exact={true} component={ProfileScreen}/>
        <Route path="/publichome" exact={true} component={PublicHomeScreen}/>
        <Route path="/" exact={true} component={PublicHomeScreen}/>
        {/* <Route path='/teste' exact={true} component={Teste}/> */}
      </Switch>
    </BrowserRouter>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
