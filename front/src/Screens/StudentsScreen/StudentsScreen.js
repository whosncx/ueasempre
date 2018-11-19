import React, {Component} from 'react';
import './StudentsScreen.css';

//App Components

//external components
import user from '../../Assets/user.png';
import Header from '../../Components/Header/Header';

class StudentsScreen extends Component{

  render(){
    return(
      <div>
        <header>
          <Header></Header>
        </header>
        <section className='grid-studentsContainer'>
            <article className='grid-studentsItem'>
                <a href="./cadastro">
                    <img className='grid-studentsImg' alt='aluno' src={user}/>
                    <p className='grid-studentsText'>fulano ciclano chales</p>
                </a>
            </article>
            <article className='grid-studentsItem'>
                <a href="./cadastro">
                    <img className='grid-studentsImg' alt='aluno' src={user}/>
                    <p className='grid-studentsText'>fulano ciclano chales</p>
                </a>
            </article>
            <article className='grid-studentsItem'>
                <a href="./cadastro">
                    <img className='grid-studentsImg' alt='aluno' src={user}/>
                    <p className='grid-studentsText'>fulano ciclano chales</p>
                </a>
            </article>
            <article className='grid-studentsItem'>
                <a href="./cadastro">
                    <img className='grid-studentsImg' alt='aluno' src={user}/>
                    <p className='grid-studentsText'>fulano ciclano chales</p>
                </a>
            </article>
            <article className='grid-studentsItem'>
                <a href="./cadastro">
                    <img className='grid-studentsImg' alt='aluno' src={user}/>
                    <p className='grid-studentsText'>fulano ciclano chales</p>
                </a>
            </article>
            <article className='grid-studentsItem'>
                <a href="./cadastro">
                    <img className='grid-studentsImg' alt='aluno' src={user}/>
                    <p className='grid-studentsText'>fulano ciclano chales</p>
                </a>
            </article>
            <article className='grid-studentsItem'>
                <a href="./cadastro">
                    <img className='grid-studentsImg' alt='aluno' src={user}/>
                    <p className='grid-studentsText'>fulano ciclano chales</p>
                </a>
            </article>
            <article className='grid-studentsItem'>
                <a href="./cadastro">
                    <img className='grid-studentsImg' alt='aluno' src={user}/>
                    <p className='grid-studentsText'>fulano ciclano chales</p>
                </a>
            </article>
            <article className='grid-studentsItem'>
                <a href="./cadastro">
                    <img className='grid-studentsImg' alt='aluno' src={user}/>
                    <p className='grid-studentsText'>fulano ciclano chales</p>
                </a>
            </article>
            <article className='grid-studentsItem'>
                <a href="./cadastro">
                    <img className='grid-studentsImg' alt='aluno' src={user}/>
                    <p className='grid-studentsText'>fulano ciclano chales</p>
                </a>
            </article>
            <article className='grid-studentsItem'>
                <a href="./cadastro">
                    <img className='grid-studentsImg' alt='aluno' src={user}/>
                    <p className='grid-studentsText'>fulano ciclano chales</p>
                </a>
            </article>
            <article className='grid-studentsItem'>
                <a href="./cadastro">
                    <img className='grid-studentsImg' alt='aluno' src={user}/>
                    <p className='grid-studentsText'>fulano ciclano chales</p>
                </a>
            </article>
            
        </section>
      </div>    
    );
  } 
}

export default StudentsScreen;