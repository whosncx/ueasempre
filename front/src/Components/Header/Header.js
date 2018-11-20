import React, {Component} from 'react';
import classnames from 'classnames';
import './Header.css';
import uea1 from '../../Assets/uea1.svg';

import { Link } from 'react-router-dom';

class Header extends Component{
  constructor(props){
    super(props);
    this.state = {
      selected : this.props.active,
      username : ''
    };
  }
  
  myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
  }
/*
  getUsername() {
    if(this.state.username)
      return;
    const token = sessionStorage.getItem('jwtToken');
    if(token){
      fetch(Global.API_URL + '/user', {
        headers : new Headers({
          'x-access-token':token,
        })
      }).then((response) => {
        if(response.status === 401){
          sessionStorage.removeItem('jwtToken');
        }
        response.json().then((data) => {
          this.setState({
              username: data.nome
          })
        });      
      }).catch((e) => {
        sessionStorage.removeItem('jwtToken');
      });
    }    
  }
*/
  headerClicked(){
    sessionStorage.removeItem('jwtToken');
  }
  render(){
    let div = <div>
    <div className="topnav" id="myTopnav">
      <div className="initLogo">
      <img className="fapeam-logo" src={uea1} alt='logo do sempre uea'/><div className="nameBrand"></div></div>          
      <Link to="/alunos" onClick={this.headerClicked.bind(this)} className={classnames({'selected' : this.state.selected === 0 }, 'option')}>
        <a>Lista de Alunos</a>
      </Link>
    </div>
  </div>
  if (this.state.selected===1){
    div = <div>
    <div className="topnav" id="myTopnav">
      <div className="initLogo">
      <img className="fapeam-logo" src={uea1} alt='logo do sempre uea'/><div className="nameBrand"></div></div>          
      <Link to="/login" onClick={this.headerClicked.bind(this)} className={classnames({'selected' : this.state.selected === 0 }, 'option')}>
        <a>Entrar</a>
      </Link>
    </div>
  </div>
  }
  
    return(
      div
    );
  }
}
export default Header;
/*
  let div = <div>
  <div className="topnav" id="myTopnav">
    <div className="initLogo">
    <img className="fapeam-logo" src={uea1} alt='logo do sempre uea'/><div className="nameBrand"></div></div>          
    <Link to="/login" onClick={this.headerClicked.bind(this)} className={classnames({'selected' : this.state.selected === 0 }, 'option')}>
      <a>Lista de Alunos</a>
    </Link>
    <a href="javascript:void(0);" className="icon" onClick={this.myFunction.bind(this)}>
      <i className="fa fa-bars"></i>
    </a>
  </div>
</div>
*/