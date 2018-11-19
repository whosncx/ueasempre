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
                <img className='grid-studentsImg' src={user}/>
                <p className='grid-studentsText'>fulano ciclano chales</p>
            </article>
            <article className='grid-studentsItem'>
                <img className='grid-studentsImg' src={user}/>
                <p className='grid-studentsText'>fulano ciclano chales</p>
            </article>
            <article className='grid-studentsItem'>
                <img className='grid-studentsImg' src={user}/>
                <p className='grid-studentsText'>fulano ciclano chales</p>
            </article>
            <article className='grid-studentsItem'>
                <img className='grid-studentsImg' src={user}/>
                <p className='grid-studentsText'>fulano ciclano chales</p>
            </article>
            <article className='grid-studentsItem'>
                <img className='grid-studentsImg' src={user}/>
                <p className='grid-studentsText'>fulano ciclano chales</p>
            </article>
            <article className='grid-studentsItem'>
                <img className='grid-studentsImg' src={user}/>
                <p className='grid-studentsText'>fulano ciclano chales</p>
            </article>
            <article className='grid-studentsItem'>
                <img className='grid-studentsImg' src={user}/>
                <p className='grid-studentsText'>fulano ciclano chales</p>
            </article>
            <article className='grid-studentsItem'>
                <img className='grid-studentsImg' src={user}/>
                <p className='grid-studentsText'>fulano ciclano chales</p>
            </article>
            <article className='grid-studentsItem'>
                <img className='grid-studentsImg' src={user}/>
                <p className='grid-studentsText'>fulano ciclano chales</p>
            </article>
            <article className='grid-studentsItem'>
                <img className='grid-studentsImg' src={user}/>
                <p className='grid-studentsText'>fulano ciclano chales</p>
            </article>
            <article className='grid-studentsItem'>
                <img className='grid-studentsImg' src={user}/>
                <p className='grid-studentsText'>fulano ciclano chales</p>
            </article>
            <article className='grid-studentsItem'>
                <img className='grid-studentsImg' src={user}/>
                <p className='grid-studentsText'>fulano ciclano chales</p>
            </article>            
        </section>
      </div>    
    );
  } 
}

export default StudentsScreen;