import React, {Component} from 'react';
import './LoginScreen.css';
import uea from '../../Assets/uea.svg';

//App Components

//external components
import Global from '../../Components/global'
import Header from '../../Components/Header/Header';
import { Link } from 'react-router-dom';
import md5 from 'js-md5'

class LoginScreen extends Component{
    constructor(){
        super();
        this.state = {
            cpf: '',
            password : ''
        }
      }
      
      handleChange(evt) {
        if(evt.target.id === 'cpf'){
            this.setState({
                cpf : evt.target.value
            });
        }else{
            this.setState({
                password : evt.target.value
            });
        }
      }
    
      handleSubmit(evt) {
        if(!this.state.cpf || !this.state.password){
            alert('Login required!')
        } else {
            fetch(Global.API_URL + '/login', { //local
                headers : new Headers({
                    'Authorization': 'Basic '+btoa(this.state.cpf+':'+md5(this.state.password)),
                })
            })
            .then(function(response){
              return response.json();
            })
            .then(data => {
                if(data.canLogin){
                        sessionStorage.setItem('jwtToken', data.token);
                        this.props.history.push('/perfil')
                    } else{
                        alert('Verifique as informações e tente novamente');
                    }
                })  
            .catch((e) => {
                    console.log(e);
                    alert('Houve um erro ao realizar o login, tente novamente mais tarde');
            });
        }     
        evt.preventDefault();
      }
  render(){
    return(
      <div>
        <header>
          <Header></Header>
        </header>
        <div className='loginContainer'>
                    <div className="formLoginContainer">
                        {/* <form onSubmit={this.handleSubmit.bind(this)} className="formLogin"> */}
                        <div className="logoContainer">
                            <img className = "logo" src={uea} alt='Logo da fapeam'/>
                        </div>
                        <form>
                            <div className="cpfContainer inputContainer">
                                {/* <input className="input" id="cpf" placeholder="CPF" onChange={this.handleChange.bind(this)}/> */}
                                <input className="input-login" id="cpf" placeholder="CPF" onChange={this.handleChange.bind(this)}/>
                                <span className=""></span>
                            </div>
                        
                            <div className="passwordContainer inputContainer">
                                {/* <input className="input" type="password" id="password" placeholder="Senha" onChange={this.handleChange.bind(this)}/> */}
                                <input className="input-login" type="password" id="password" placeholder="Senha" onChange={this.handleChange.bind(this)}/>
                                <span className=""></span>
                            </div>
                        
                            <div className="btnContainer">
                                <button onClick={this.handleSubmit.bind(this)}  className="btnLogin" type="submit">
                                    Entrar
                                </button>
                            </div >
                            <div className="btnContainer">
                                <Link to="/cadastro" >
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
          </div>    
    );
  }
  
}

export default LoginScreen;