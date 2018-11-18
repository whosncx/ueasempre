import React, {Component} from 'react';
import './Header.css';
import uea1 from '../../Assets/uea1.svg';

class Header extends Component{
    render(){
      return(
      <div className="makeGreen">
          <div className="sempreLogo">
            <img src={uea1} alt='logo da uea'/>
          </div>
          <p className="toRight"> Lista de Alunos </p>
      </div>
      );
    }
  }
  export default Header;