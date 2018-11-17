import React, {Component} from 'react';
import './SignUpScreen.css';

//App Components

//external components
import uea from '../../Assets/uea.svg';

class SignUpScreen extends Component{

  render(){
    return(
      <div>
        <p className='labTitle'>Cadastro do Usuário</p>
        <div className='componentsLab'>
          <div className='imgLogo'>
              <img src={uea} height="200" />
          </div>
          <div className='fieldsLab'>
            <input className='inputs' id='name' placeholder='Nome Completo' type='name'/>
            <input className='inputs' id='email' placeholder='Email' type='email' />
            <input className='inputs' id='facebook' placeholder='Facebook' type='facebook' />
            <input className='inputs' id='linkedin' placeholder='Linkedin' type='linkedin' />
            <input className='inputs' id='whatsapp' placeholder='Whatsapp' type='whatsapp' />
            <input className='inputs' id='unity' placeholder='Unidade' type='unity' />
            <input className='inputs' id='course' placeholder='Curso' type='course' />
            <input className='inputs' id='cpf' placeholder='CPF' type='cpf' />
            <input className='inputs' id='password' placeholder='Senha' type='password' />
            <input className='inputs' id='password' placeholder='Confirmar Senha' type='password' />
            <button className='button'>
              Voltar
            </button>
            <button className='button'>
              Salvar
            </button>
          </div>
        </div>
      </div>
      );

    }

}

export default SignUpScreen;
