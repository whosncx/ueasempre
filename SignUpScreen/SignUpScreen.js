import React, {Component} from 'react';
import './SignUpScreen.css';

//App Components

//external components
import camera from '../../Assets/photo-camera.svg';
import Header from '../../Components/Header/Header';

class SignUpScreen extends Component{

  /*constructor(){
    super();
    this.state = {
      ehPraDesabilitar: ''
    }
  }*/

  render(){
    return(
      <div>
        <header>
          <Header></Header>
        </header>
        <p className='labTitle-signUpScreen'>Cadastro do Usuário</p>
        <div className='componentsLab-signUpScreen'>
          <div className='imgLogo-signUpScreen'>
              <img src={camera} height="200" />
              <p className='imgLogoSubTitle-signUpScreen'>insira uma foto aqui</p>
              <div className='fieldsLabDinamico-signUpScreen'> 
              <input className='inputsDinamico-signUpScreen' id='entryYear' placeholder='Ano de Ingresso' type='entryYear' />
              <input className='inputsDinamico-signUpScreen' id='exitYear' placeholder='Ano de Egresso' type='exitYear' />
              <input className='inputsDinamico-signUpScreen' id='institutuion' placeholder='Instituição' type='institutuion' />
              <input className='inputsDinamico-signUpScreen' id='situation' placeholder='Situação' type='situation' />
              <input className='inputsDinamico-signUpScreen' id='function' placeholder='Função' type='function' />
              </div>
          </div>
          <div className='fieldsLab-signUpScreen'>
            <input className='inputs-signUpScreen' id='name' placeholder='Nome Completo' type='name'/>
            <input className='inputs-signUpScreen' id='email' placeholder='Email' type='email' />
            <input className='inputs-signUpScreen' id='facebook' placeholder='Facebook' type='facebook' />
            <input className='inputs-signUpScreen' id='linkedin' placeholder='Linkedin' type='linkedin' />
            <input className='inputs-signUpScreen' id='unity' placeholder='Unidade' type='unity' />
            <input className='inputs-signUpScreen' id='course' placeholder='Curso' type='course' />
            <input className='inputs-signUpScreen' id='cpf' placeholder='CPF' type='cpf' />
            <input className='inputs-signUpScreen' id='password' placeholder='Senha' type='password' />
            <input className='inputs-signUpScreen' id='password' placeholder='Confirmar Senha' type='password' />
            <div className='buttons-signUpScreen'>
              <button className='buttonVoltar-signUpScreen'>
                Voltar
              </button>
              <button className='buttonSalvar-signUpScreen'>
                Salvar
              </button>
            </div>
          </div>
        </div>
      </div>
      );

    }

}

export default SignUpScreen;
