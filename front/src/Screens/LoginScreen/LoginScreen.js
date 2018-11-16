import React, {Component} from 'react';
import './LoginScreen.css';

//App Components

//external components
import uea from '../../Assets/uea.svg';

class LoginScreen extends Component{

  render(){
    return(
      <div>
          <p className='labTitle'>Login</p>
        <div className='componentsLab'>
            <div className='imgLogo'>
                <img src={uea} height="200" />
            </div>
          <div className='fieldsLab'>
            <input className='inputs' id='user' placeholder='Insira seu email ou CPF'/>
            <input className='inputs' id='password' placeholder='Insira sua senha' type='password' />  
            <button className='button'>
              Entrar
            </button>
          </div>
        </div>
      </div>
    );
  }
  
}

export default LoginScreen;