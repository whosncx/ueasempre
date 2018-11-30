import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './PublicHomeScreen.css';
import Global from './../../Components/global'
import camera from '../../Assets/user.png';

export default class PublicHomeScreen extends Component{
    alunos = []
    constructor(){
        super();
        this.state = {
            alunos: [],
            selected: ''
        } 
    }

    componentDidMount(){
        var request = {
            method: 'get'
        }
        fetch(Global.API_URL + '/alunos/12', request).then((response) => {
            response.json().then((data) => {
                // console.log(data)
                console.log(data.alunos)
                this.setState({alunos:data.alunos}) 
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

    handleError(e){
        e.target.src = camera;
    }

    goToLogin(){
        this.props.history.push('/login');
    }

    goToRegister(){
        sessionStorage.removeItem('jwtToken')
        this.props.history.push('/cadastro');
    }

    goAlunos(id){
        console.log(id)
        this.props.history.push(
            "/alunos"
        );
      }

    render(){
        return(
            <div className="containerPublicHomeScreen">
                <div className="upContainerContainer">
                <div className="upContainer">
                    <div className="welcomeContainer"> 
                        <h1>Bem Vindo ao<br></br>Sempre UEA</h1>
                        <h2>Cadastro de discentes e egressos da UEA</h2>
                    </div>
                    <div className="signInUpContainer">
                        <div className="buttonsContainer">
                            <div className="buttonContainer"><button className="btn-signIn" onClick={this.goToLogin.bind(this)}>Login</button></div>
                            <div className="buttonContainer"><button className="btn-signUp" onClick={this.goToRegister.bind(this)}>Registrar</button></div>
                            <div className="buttonContainer"><button className="btn-signIn" onClick={this.goAlunos.bind(this)}>Veja quem está aqui</button></div>
                        </div>
                    </div> 
                </div>
               <div className="alunosContainer" onClick={()=>this.goAlunos()} >
                    <section className='grid-studentsContainer'>
                        {this.state.alunos.map(c => 
                            <article className='grid-studentsItem'>
                                <img onError={this.handleError} className='grid-studentsImg-publicHome' alt='aluno' src={Global.API_URL + '/imgs/uploads/' + c.id + '.png?v=' + Date.now()}/>
                                <p className='grid-studentsText-publicHome'>{c.nome}</p>
                            </article>
                            )}
                        </section>
               </div> 
            </div>
            </div>
        );
    }
}