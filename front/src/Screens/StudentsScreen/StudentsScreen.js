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
        <div className='grid-studentsContainer'>
            <ul>
                <li className='grid-studentsItem'>
                    <img className='grid-studentsImg' src={user}/>
                    <p className='grid-studentsText'>fulano ciclano chales</p>
                </li>
                <li className='grid-studentsItem'>
                    <img className='grid-studentsImg' src={user}/>
                    <p className='grid-studentsText'>fulano ciclano chales</p>
                </li>
                <li className='grid-studentsItem'>
                    <img className='grid-studentsImg' src={user}/>
                    <p className='grid-studentsText'>fulano ciclano chales</p>
                </li>
                <li className='grid-studentsItem'>
                    <img className='grid-studentsImg' src={user}/>
                    <p className='grid-studentsText'>fulano ciclano chales</p>
                </li>
                <li className='grid-studentsItem'>
                    <img className='grid-studentsImg' src={user}/>
                    <p className='grid-studentsText'>fulano ciclano chales</p>
                </li>
                <li className='grid-studentsItem'>
                    <img className='grid-studentsImg' src={user}/>
                    <p className='grid-studentsText'>fulano ciclano chales</p>
                </li>
                <li className='grid-studentsItem'>
                    <img className='grid-studentsImg' src={user}/>
                    <p className='grid-studentsText'>fulano ciclano chales</p>
                </li>
                <li className='grid-studentsItem'>
                    <img className='grid-studentsImg' src={user}/>
                    <p className='grid-studentsText'>fulano ciclano chales</p>
                </li>
                <li className='grid-studentsItem'>
                    <img className='grid-studentsImg' src={user}/>
                    <p className='grid-studentsText'>fulano ciclano chales</p>
                </li>
                <li className='grid-studentsItem'>
                    <img className='grid-studentsImg' src={user}/>
                    <p className='grid-studentsText'>fulano ciclano chales</p>
                </li>
                <li className='grid-studentsItem'>
                    <img className='grid-studentsImg' src={user}/>
                    <p className='grid-studentsText'>fulano ciclano chales</p>
                </li>
                <li className='grid-studentsItem'>
                    <img className='grid-studentsImg' src={user}/>
                    <p className='grid-studentsText'>fulano ciclano chales</p>
                </li>
            </ul>              
        </div>
      </div>    
    );
  } 
}

export default StudentsScreen;