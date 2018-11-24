import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './PublicHomeScreen.css';
export default class PublicHomeScreen extends Component{

    goToLogin(){
        this.props.history.push('/login');
    }

    goToRegister(){
        this.props.history.push('/cadastro');
    }

    render(){
        return(
            <div className="containerPublicHomeScreen">
                <div className="upContainer">
                    <div className="welcomeContainer"> 
                        <h1>Bem Vindo <br></br> ao Sempre UEA</h1>
                    </div>
                    <div className="signInUpContainer">
                        <div className="buttonsContainer">
                            <div className="buttonContainer"><button className="btn-signIn" onClick={this.goToLogin.bind(this)}>Login</button></div>
                            <div className="buttonContainer"><button className="btn-signUp" onClick={this.goToRegister.bind(this)}>Registrar</button></div>
                        </div>
                    </div> 
                </div>
               <div className="alunosContainer">
               </div> 
            </div>
        );
    }
}