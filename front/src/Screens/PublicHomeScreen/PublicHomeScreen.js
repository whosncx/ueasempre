import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './PublicHomeScreen.css';
export default class PublicHomeScreen extends Component{
    render(){
        return(
            <div className="containerPublicHomeScreen">
                <div className="upContainer">
                    <div className="welcomeContainer"> 
                        <h1>Bem Vindo <br></br> ao Sempre UEA</h1>
                    </div>
                    <div className="signInUpContainer">
                        <div className="buttonsContainer">
                            <div className="buttonContainer"><button className="btn-signIn">Login</button></div>
                            <div className="buttonContainer"><button className="btn-signUp">Registrar</button></div>
                        </div>
                    </div> 
                </div>
               <div className="alunosContainer">
               </div> 
            </div>
        );
    }
}