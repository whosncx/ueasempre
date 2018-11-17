import React, {Component} from 'react';
import './Header.css';
import uea from '../../Assets/uea.svg';

class Header extends Component{
    render(){
      return(
      <div className="makeGreen">
          <div className="sempreLogo">
          <div><img src={uea} alt='logo da uea'/>
          </div>
          </div>
      </div>
      );
    }
  }
  export default Header;