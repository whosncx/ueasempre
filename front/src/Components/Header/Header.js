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
      <Link to='/'>
      <div className="nameBrand">
      <img className="fapeam-logo" src={uea1} alt='logo do sempre uea'/>
      </div>
      </Link>
      </div>          
      <Link to="/login" onClick={this.headerClicked.bind(this)} className={classnames({'selected' : this.state.selected === 0 }, 'option')}>
        <a>Lista de Alunos</a>
      </Link>
      <a href="javascript:void(0);" className="icon" onClick={this.myFunction.bind(this)}>
        <i className="fa fa-bars"></i>
      </a>
    </div>
  </div>

    /*
    if (this.state.selected === 3) {
      // PublicLabPage e LabDescPage
      div = <div>
        <div className="topnav" id="myTopnav">
          <div className="initLogo">
          <img className="fapeam-logo-list" src={fapeamLogo} alt='logo do fapeam'/><div className="nameBrandList">Lista de Laboratórios</div></div>          
          <Link to="/login" >
            <a>SigFapeam</a>
          </Link>
          <Link to="/login" >
            <a>FapeamLab</a>
          </Link>
          {/* <a href="javascript:void(0);" className="icon" onClick={this.myFunction.bind(this)}>
            <i className="fa fa-bars"></i>
          </a> }
        </div>
      </div>
    }else if (this.state.selected === 4) {
      // LabsPage e LabPage
      this.getUsername();
      div = <div>
        <div className="topnav topnav4" id="myTopnav">
          <div className="initLogo">
          <img className="fapeam-logo" src={fapeamLogo} alt='logo do fapeam'/>
          <div className="nameBrand">FapeamLab</div></div>          
                   
          <Link to="/login" onClick={this.headerClicked.bind(this)}>
            <a className="aSair">Sair</a>
          </Link>
          <p>Olá, {this.state.username}</p>
          
          <a href="javascript:void(0);" className="icon" onClick={this.myFunction.bind(this)}>
            <i className="fa fa-bars"></i>
          </a>
        </div>
      </div>
    }else if (this.state.selected === 5) {
      // LoginPage
      div = <div>
        <div className="topnav topnav4" id="myTopnav">
          <div className="initLogo">
            <img className="fapeam-logo" src={fapeamLogo} alt='logo do fapeam'/>
            <div className="nameBrand">FapeamLab</div>
          </div>          
                   
          <Link to="/labs" >
            <a className="Laboratorios">Laboratórios</a>
          </Link>
          
          {/* <a href="javascript:void(0);" className="icon" onClick={this.myFunction.bind(this)}>
            <i className="fa fa-bars"></i>
          </a>}
        </div>
      </div>
    }
    */
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