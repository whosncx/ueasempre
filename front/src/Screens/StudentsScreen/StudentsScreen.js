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
        <div className='studentsContainer'>
            <div class="grid-container">
                <div class="grid-item">
                    <img src={user}/>
                </div>
                <div class="grid-item">
                    <img src={user}/>
                </div>
                <div class="grid-item">
                    <img src={user}/>
                </div>  
                <div class="grid-item">
                    <img src={user}/>
                </div>
                <div class="grid-item">
                    <img src={user}/>
                </div>
                <div class="grid-item">
                    <img src={user}/>
                </div>
                <div class="grid-item">
                    <img src={user}/>
                </div>  
                <div class="grid-item">
                    <img src={user}/>
                </div>
                <div class="grid-item">
                    <img src={user}/>
                </div>
                <div class="grid-item">
                    <img src={user}/>
                </div>
                <div class="grid-item">
                    <img src={user}/>
                </div>  
                <div class="grid-item">
                    <img src={user}/>
                </div>
            </div>               
        </div>
      </div>    
    );
  } 
}

export default StudentsScreen;