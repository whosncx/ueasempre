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
        <div className='componentsLab-loginScreen'>
            <div className='imgLoginLogo'>
                <img src={uea} height="200" />
            </div>
          <div className='fieldsLab-loginScreen'>
            <input className='inputs-loginScreen' id='user' placeholder='Insira seu email ou CPF'/>
            <input className='inputs-loginScreen' id='password' placeholder='Insira sua senha' type='password' />
            <p><a href="https://www.google.com.br/" target="_blank">Esqueci minha senha</a></p>
            <button className='button-loginScreen'>
              Entrar
            </button>
            <p><a href="https://www.google.com.br/" target="_blank">Novo Usuário?</a></p>
          </div>
        </div>
      </div>
    );
  }
  
}

export default LoginScreen;