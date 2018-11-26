import React, {Component} from 'react';
import './ProfileScreen.css';

//App Components

//external components
import user from '../../Assets/user.png';
import Header from '../../Components/Header/Header';

class ProfileScreen extends Component{

  render(){
    return(
      <div>
        <header>
        
          <Header></Header>
        </header>
        <section className='grid-profile'>
          <article className='grid-profileTop topp'>
            <h1 className='grid-profileTopTitle'>Perfil do Usuário</h1>
          </article>
          <article className='grid-profilePhoto photo'>
            <img className='grid-profilePhotoImg' alt='foto' src={user}/>
            <p className='grid-profilePhotoText'>Fulano Ciclano Chales</p>
          </article>
          <article className='grid-profilePersonal personal'>
            <h2 className='grid-profilePersonalTitle'>Pessoal</h2>
            <p className='grid-profilePersonalText'>Nome Completo</p>
            <input disabled className='grid-profilePersonalInput' placeholder='Seu nome completo' type='name'/>
            <p className='grid-profilePersonalText'>Email</p>
            <input disabled className='grid-profilePersonalInput' placeholder='Seu email' type='email' />
            <p className='grid-profilePersonalText'>Facebook</p>
            <input disabled className='grid-profilePersonalInput' placeholder='Sua página do Facebook' type='facebook' />
            <p className='grid-profilePersonalText'>Linkedin</p>
            <input disabled className='grid-profilePersonalInput' placeholder='Sua página do Linkedin' type='linkedin' />
            <p className='grid-profilePersonalText'>Lattes</p>
            <input disabled className='grid-profilePersonalInput' placeholder='Sua página do Lattes' type='Lattes' />
            <p className='grid-profilePersonalText'>Whatsapp</p>
            <input disabled className='grid-profilePersonalInput' placeholder='Seu whatsapp pessoal' type='whatsapp' />

            <p className='grid-profilePersonalText'>CPF</p>
            <input disabled className='grid-profilePersonalInput' placeholder='Seu CPF' type='cpf' />
            <p className='grid-profilePersonalText'>Senha</p>
            <input disabled className='grid-profilePersonalInput' placeholder='Insira sua senha' type='password' />
            <p className='grid-profilePersonalText'>Confirmar Senha</p>
            <input disabled className='grid-profilePersonalInput' placeholder='Confirme sua senha' type='password' />
          </article>
          <article className='grid-profileAcademic academic'>
            <h2 className='grid-profileAcademicTitle'>Academico</h2>
            <p className='grid-profileAcademicText'>Ano de Ingresso</p>
            <input disabled className='grid-profileAcademicInput' placeholder='Ano de Ingresso' type='entryYear'/>
            <p className='grid-profileAcademicText'>Ano de Egresso</p>
            <input disabled className='grid-profileAcademicInput' placeholder='Ano de Egresso' type='exitYear' />
            <p className='grid-profileAcademicText'>Instituição</p>
            <input disabled className='grid-profileAcademicInput' placeholder='Instituição' type='institutuion' />
            <p className='grid-profileAcademicText'>Unidade</p>
            <input disabled className='grid-profileAcademicInput' placeholder='Unidade' type='unity' /> 
            <p className='grid-profileAcademicText'>Curso</p>              
            <input disabled className='grid-profileAcademicInput' placeholder='Curso' type='course' />
            <p className='grid-profileAcademicText'>Situação</p>
            <input disabled className='grid-profileAcademicInput' placeholder='Situação' type='situation' />
            <p className='grid-profileAcademicText'>Função</p>
            <input disabled className='grid-profileAcademicInput' placeholder='Função' type='function' />
          </article>
          <article className='grid-profileButton button'>
            <a href='#'><button className='grid-profileButtonBoxRight'>Voltar</button></a>
            <a href='#'><button className='grid-registerButtonBoxLeft'>Editar</button></a>
          </article>
        </section>
      </div>    
    );
  } 
}

export default ProfileScreen;