import React, {Component} from 'react';
import './LoginScreen.css';

//App Components

//external components
import Global from '../../Components/global'
import uea from '../../Assets/uea.svg';
import Header from '../../Components/Header/Header';
import { Link } from 'react-router-dom';

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
                    'Authorization': 'Basic '+btoa(this.state.cpf+':'+this.state.password),
                })
            })
            .then(function(response){
              return response.json();
            })
            .then(data => {
                console.log(data)
                if(data.canLogin){
                        sessionStorage.setItem('jwtToken', data.token);
                        this.props.history.push('/cadastro')
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
                
                    <div className="logoContainer">
                        <img className = "logo" src={uea} alt='Logo da fapeam'/>
                    </div>
                    
                    <div className="formLoginContainer">
                        <form onSubmit={this.handleSubmit.bind(this)} className="formLogin">
                            <div className="cpfContainer inputContainer">
                                <input className="input" id="cpf" placeholder="CPF" onChange={this.handleChange.bind(this)}/>
                                <span className=""></span>
                            </div>
                        
                            <div className="passwordContainer inputContainer">
                                <input className="input" type="password" id="password" placeholder="Senha" onChange={this.handleChange.bind(this)}/>
                                <span className=""></span>
                            </div>
                        
                            <div className="btnContainer">
                                <button className="btnLogin" type="submit">
                                    Entrar
                                </button>
                            </div >
                            <div className="btnContainer">
                                <Link onClick={sessionStorage.setItem('jwtToken', '')}  to="/cadastro" >
                                    Novo Usuário?
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