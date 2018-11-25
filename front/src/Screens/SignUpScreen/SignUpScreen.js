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
        <section className='grid-register'>
          <article className='grid-registerTop topp'>
            <h1 className='grid-registerTopTitle'>Cadastro do Usuário</h1>
          </article>
          <article className='grid-registerPhoto photo'>
            <img className='grid-registerPhotoImg' src={camera}/>
            <p className='grid-registerPhotoText'>insira uma foto <a href='#'>aqui</a></p>
          </article>
          <article className='grid-registerPersonal personal'>
            <h2 className='grid-registerPersonalTitle'>Pessoal</h2>
            <p className='grid-registerPersonalText'>Nome Completo</p>
            <input className='grid-registerPersonalInput' placeholder='Seu nome completo' type='name'/>
            <p className='grid-registerPersonalText'>Email</p>
            <input className='grid-registerPersonalInput' placeholder='Seu email' type='email' />
            <p className='grid-registerPersonalText'>Facebook</p>
            <input className='grid-registerPersonalInput' placeholder='Sua página do Facebook' type='facebook' />
            <p className='grid-registerPersonalText'>Linkedin</p>
            <input className='grid-registerPersonalInput' placeholder='Sua página do Linkedin' type='linkedin' />
            <p className='grid-registerPersonalText'>CPF</p>
            <input className='grid-registerPersonalInput' placeholder='Seu CPF' type='cpf' />
            <p className='grid-registerPersonalText'>Senha</p>
            <input className='grid-registerPersonalInput' placeholder='Insira sua senha' type='password' />
            <p className='grid-registerPersonalText'>Confirmar Senha</p>
            <input className='grid-registerPersonalInput' placeholder='Confirme sua senha' type='password' />
          </article>
          <article className='grid-registerAcademic academic'>
            <h2 className='grid-registerAcademicTitle'>Academico</h2>
            <p className='grid-registerAcademicText'>Ano de Ingresso</p>
            <input className='grid-registerAcademicInput' placeholder='Ano de Ingresso' type='entryYear'/>
            <p className='grid-registerAcademicText'>Ano de Egresso</p>
            <input className='grid-registerAcademicInput' placeholder='Ano de Egresso' type='exitYear' />
            <p className='grid-registerAcademicText'>Instituição</p>
            <input className='grid-registerAcademicInput' placeholder='Instituição' type='institutuion' />
            <p className='grid-registerAcademicText'>Unidade</p>
            <input className='grid-registerAcademicInput' placeholder='Unidade' type='unity' /> 
            <p className='grid-registerAcademicText'>Curso</p>              
            <input className='grid-registerAcademicInput' placeholder='Curso' type='course' />
            <p className='grid-registerAcademicText'>Situação</p>
            <input className='grid-registerAcademicInput' placeholder='Situação' type='situation' />
            <p className='grid-registerAcademicText'>Função</p>
            <input className='grid-registerAcademicInput' placeholder='Função' type='function' />
          </article>
          <article className='grid-registerButton button'>
            <a href='#'><button className='grid-registerButtonBoxRight'>Voltar</button></a>
            <a href='#'><button className='grid-registerButtonBoxLeft'>Salvar</button></a>
          </article>
        </section>
      </div>
      );
    }
}

export default SignUpScreen;