import React, {Component} from 'react';
import './LoginScreen.css';

//App Components

//external components
import uea from '../../Assets/uea.svg';
import Header from '../../Components/Header/Header';
import { Link } from 'react-router-dom';

class LoginScreen extends Component{

    otherFunction() {
        window.location.replace("http://localhost:3000/cadastro");
    }
  render(){
    return(
      <div>
        <header>
          <Header></Header>
        </header>
        <div className='loginContainer'>
                    <div className="welcome-login">
                        <h1>Bem Vindo ao<br></br>Sempre UEA</h1>
                    </div>
                    <div className="formLoginContainer">
                        {/* <form onSubmit={this.handleSubmit.bind(this)} className="formLogin"> */}
                        <div className="logoContainer">
                            <img className = "logo" src={uea} alt='Logo da fapeam'/>
                        </div>
                        <form>
                            <div className="cpfContainer inputContainer">
                                {/* <input className="input" id="cpf" placeholder="CPF" onChange={this.handleChange.bind(this)}/> */}
                                <input className="input-login" id="cpf" placeholder="CPF"/>
                                <span className=""></span>
                            </div>
                        
                            <div className="passwordContainer inputContainer">
                                {/* <input className="input" type="password" id="password" placeholder="Senha" onChange={this.handleChange.bind(this)}/> */}
                                <input className="input-login" type="password" id="password" placeholder="Senha"/>
                                <span className=""></span>
                            </div>
                        
                            <div className="btnContainer">
                                {/* <button className="btnLogin" type="submit"> */}
                                <button className="btnLogin">
                                    Entrar
                                </button>
                            </div >
                            <div className="btnContainer">
                                <Link onClick={this.otherFunction.bind(this)} to="/cadastro" >
                                <a href="http://localhost:3000/cadastro" target="_blank" className="newUser">Novo Usuário?</a>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
          </div>    
    );
  }
  
}

export default LoginScreen;