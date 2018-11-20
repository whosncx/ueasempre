import React, {Component} from 'react';
import './StudentsScreen.css';

//App Components

//external components
import Global from '../../Components/global'
import user from '../../Assets/user.png';
import Header from '../../Components/Header/Header';

class StudentsScreen extends Component{
    alunos = []
    constructor(){
        super();
        this.state = {
            alunos: []
        } 
    }

    componentDidMount(){
        var request = {
            method: 'get'
        }
        fetch(Global.API_URL + '/alunos', request).then((response) => {
            response.json().then((data) => {
                // console.log(data)
                console.log(data.alunos)
                this.alunos = data['alunos']
                // data.forEach(element => {
                //     console.log(element)
                //     this.alunos.push({nome:element['nome'], id:element['id']})
                // });
            });      
        }).catch((e) => {
            console.log(e);
            alert('Houve um erro ao adicionar Aluno, tente novamente mais tarde');
        });
    }
    
  render(){
    //   console.log(this.alunos)
    return(
      <div>
        <header>
          <Header active={1}></Header>
        </header>

        {this.alunos.map(c => 
            <article className='grid-studentsItem'>
                <a className='grid-studentsHref' href="./perfil">
                    <img className='grid-studentsImg' alt='aluno' src={user}/>
                    <p className='grid-studentsText'>{c.nome}</p>
                </a>
            </article>
        )}

       {/* <section className='grid-studentsContainer'>
            <article className='grid-studentsItem'>
                <a className='grid-studentsHref' href="./perfil">
                    <img className='grid-studentsImg' alt='aluno' src={user}/>
                    <p className='grid-studentsText'></p>
                </a>
            </article>
            <article className='grid-studentsItem'>
                <a className='grid-studentsHref' href="./perfil">
                    <img className='grid-studentsImg' alt='aluno' src={user}/>
                    <p className='grid-studentsText'>fulano ciclano chales</p>
                </a>
            </article>
            <article className='grid-studentsItem'>
                <a className='grid-studentsHref' href="./perfil">
                    <img className='grid-studentsImg' alt='aluno' src={user}/>
                    <p className='grid-studentsText'>fulano ciclano chales</p>
                </a>
            </article>
            <article className='grid-studentsItem'>
                <a className='grid-studentsHref' href="./perfil">
                    <img className='grid-studentsImg' alt='aluno' src={user}/>
                    <p className='grid-studentsText'>fulano ciclano chales</p>
                </a>
            </article>
            <article className='grid-studentsItem'>
                <a className='grid-studentsHref' href="./perfil">
                    <img className='grid-studentsImg' alt='aluno' src={user}/>
                    <p className='grid-studentsText'>fulano ciclano chales</p>
                </a>
            </article>
            <article className='grid-studentsItem'>
                <a className='grid-studentsHref' href="./perfil">
                    <img className='grid-studentsImg' alt='aluno' src={user}/>
                    <p className='grid-studentsText'>fulano ciclano chales</p>
                </a>
            </article>
            <article className='grid-studentsItem'>
                <a className='grid-studentsHref' href="./perfil">
                    <img className='grid-studentsImg' alt='aluno' src={user}/>
                    <p className='grid-studentsText'>fulano ciclano chales</p>
                </a>
            </article>
            <article className='grid-studentsItem'>
                <a className='grid-studentsHref' href="./perfil">
                    <img className='grid-studentsImg' alt='aluno' src={user}/>
                    <p className='grid-studentsText'>fulano ciclano chales</p>
                </a>
            </article>
            <article className='grid-studentsItem'>
                <a className='grid-studentsHref' href="./perfil">
                    <img className='grid-studentsImg' alt='aluno' src={user}/>
                    <p className='grid-studentsText'>fulano ciclano chales</p>
                </a>
            </article>
            <article className='grid-studentsItem'>
                <a className='grid-studentsHref' href="./perfil">
                    <img className='grid-studentsImg' alt='aluno' src={user}/>
                    <p className='grid-studentsText'>fulano ciclano chales</p>
                </a>
            </article>
            <article className='grid-studentsItem'>
                <a className='grid-studentsHref' href="./perfil">
                    <img className='grid-studentsImg' alt='aluno' src={user}/>
                    <p className='grid-studentsText'>fulano ciclano chales</p>
                </a>
            </article>
            <article className='grid-studentsItem'>
                <a className='grid-studentsHref' href="./perfil">
                    <img className='grid-studentsImg' alt='aluno' src={user}/>
                    <p className='grid-studentsText'>fulano ciclano chales</p>
                </a>
            </article>
            
        </section> */}
      </div>    
    );
  } 
}

export default StudentsScreen;