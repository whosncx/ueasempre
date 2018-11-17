import React, {Component} from 'react';
import './LoginScreen.css';

//App Components

//external components
import uea from '../../Assets/uea.svg';
import Header from '../../Components/Header/Header';

class LoginScreen extends Component{

  render(){
    return(
      <div>
        <header>
          <Header></Header>
        </header>
        <div className='loginContainer'>
                
                    <div className="logoContainer">
                        <img className = "logo" src={uea} alt='Logo da fapeam'/>
                    </div>
                    
                    <div className="formLoginContainer">
                        {/* <form onSubmit={this.handleSubmit.bind(this)} className="formLogin"> */}
                        <form>
                            <div className="cpfContainer inputContainer">
                                {/* <input className="input" id="cpf" placeholder="CPF" onChange={this.handleChange.bind(this)}/> */}
                                <input className="input" id="cpf" placeholder="CPF"/>
                                <span className=""></span>
                            </div>
                        
                            <div className="passwordContainer inputContainer">
                                {/* <input className="input" type="password" id="password" placeholder="Senha" onChange={this.handleChange.bind(this)}/> */}
                                <input className="input" type="password" id="password" placeholder="Senha"/>
                                <span className=""></span>
                            </div>
                        
                            <div className="btnContainer">
                                {/* <button className="btnLogin" type="submit"> */}
                                <button className="btnLogin">
                                    Entrar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
          </div>    
    );
  }
  
}

export default LoginScreen;