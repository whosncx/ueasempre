import React, {Component} from 'react';
import './SignUpScreen.css';

import Global from '../../Components/global'
import camera from '../../Assets/photo-camera.svg';
import Header from '../../Components/Header/Header';

class SignUpScreen extends Component{
  constructor(){
    super();
    this.state = {
      entryYear:'',
      exitYear: '',
      institutuion : '',
      situation: '',
      function:'',
      name: '',
      email:'',
      linkedin:'',
      unity: '',
      course: '',
      cpf: '',
      password: '',
      facebook: ''
    }
  }

  componentDidMount() {
    const token = sessionStorage.getItem('jwtToken');
    if(!token){
      // this.props.history.push('/login');
      return 
    } else {
      fetch(Global.API_URL + '/perfilaluno', {
        headers : new Headers({
          'x-access-token': token
        })
      }).then((response) => {
        if(response.status === 401){
          sessionStorage.setItem('jwtToken','');
          this.props.history.push('/login');
        }
        response.json().then((data) => {
          console.log(data)
          this.setState({
            entryYear: data.ano_ingresso,
            exitYear: data.ano_conclusao,
            institutuion : data.discente_inst,
            situation: data.discente_situacao,
            function: data.discente_funcao,
            name: data.nome,
            email: data.email,
            linkedin: data.linkedin,
            unity: data.unidade,
            course: data.curso,
            cpf: data.cpf,
            password: data.senha,
            facebook: data.facebook
          })
        });
      }).catch((e) => {
        sessionStorage.setItem('jwtToken', '');
        alert('Houve um erro ao listar perfil, tente novamente mais tarde');
        this.props.history.push('/login');
      });
    }    
  }

  handleChange(evt) {
    switch(evt.target.id){
      case 'entryYear':
        this.setState({
          entryYear : evt.target.value
        });
      break;
      case 'exitYear':
        this.setState({
          exitYear : evt.target.value
        });
      break;
      case 'institutuion':
        this.setState({
          institutuion : evt.target.value
        });
      break;
      case 'situation':
        this.setState({
          situation : evt.target.value
        });
      break;
      case 'function':
        this.setState({
          function : evt.target.value
        });
      break;
      case 'name':
        this.setState({
          name : evt.target.value
        });
      break;
      case 'email':
        this.setState({
          email : evt.target.value
        });
      break;
      case 'facebook':
        this.setState({
          facebook : evt.target.value
        });
      break;
      case 'linkedin':
        this.setState({
          linkedin : evt.target.value
        });
      break;
      case 'unity':
        this.setState({
          unity : evt.target.value
        });
      break;
      case 'course':
        this.setState({
          course : evt.target.value
        });
      break;
      case 'cpf':
        this.setState({
          cpf : evt.target.value
        });
      break;
      case 'password':
        this.setState({
          password : evt.target.value
        });
      break;
    }
  }

  addAluno(){        
    // if(this.props.location.state){
    //   this.updateLab();
    //   return;
    // }
    const token = sessionStorage.getItem('jwtToken');
    var request = {};
    var body = JSON.stringify({
      "entryYear": this.state.entryYear,
      "exitYear": this.state.exitYear,
      "institutuion" : this.state.institutuion,
      "situation": this.state.situation,
      "function": this.state.function,
      "name": this.state.name,
      "email": this.state.email,
      "linkedin": this.state.linkedin,
      "unity": this.state.unity,
      "course": this.state.course,
      "cpf": this.state.cpf,
      "password": this.state.password,
      "facebook": this.state.facebook
    })
    if(token) {
      request = { 
        method: 'PUT',
        headers : new Headers({
          'Content-Type':'application/json',
          'x-access-token':token,
        }),
        body: body
      }
    } else {
      request = {
        method: 'post', 
        headers : new Headers({
          'Content-Type':'application/json',
        }),
        body: body
      }
    }

    if(this.state.name === '' || this.state.entryYear === '' || this.state.institutuion === '' || this.state.cpf === '' || this.state.password === '' || this.state.course === '' || this.state.unity === '') {
      alert('Prencha todos os valores');
      return;
    }

    fetch(Global.API_URL + '/cadastro', request).then((response) => {
      response.json().then((data) => {
        
        // const form = new FormData();
        // form.append('file', this.uploadInput.files[0]);
        // form.append('filename', data.id + '.png')
    
        // fetch('http://localhost:5000/upload', {
        //   method: 'POST',
        //   body: form,
        // }).then((response) => {
        //   response.json().then((body) => {
        //     this.setState({ imageURL: `http://localhost:5000/${body.file}` });
        //   });
        // });
        alert('Cadastro Realizado com Sucesso')
        this.props.history.push('/login')
      });      
    }).catch((e) => {
      console.log(e);
      alert('Houve um erro ao adicionar Aluno, tente novamente mais tarde');
    });
  }


  render(){
    return(
      <div>
        <header>
          <Header></Header>
        </header>
        <p className='labTitle-signUpScreen'>Cadastro do Usuário</p>
        <div className='componentsLab-signUpScreen'>
          <div className='imgLogo-signUpScreen'>
              <img src={camera} height="200" />
              <p className='imgLogoSubTitle-signUpScreen'>insira uma foto aqui</p>
              <div className='fieldsLabDinamico-signUpScreen'> 
              <input className='inputsDinamico-signUpScreen' value={this.state.entryYear} onChange={evt => this.handleChange(evt)} id='entryYear' placeholder='Ano de Ingresso' type='entryYear'  />
              <input className='inputsDinamico-signUpScreen' value={this.state.exitYear} onChange={evt => this.handleChange(evt)} id='exitYear' placeholder='Ano de Egresso' type='exitYear' />
              <input className='inputsDinamico-signUpScreen' value={this.state.institutuion} onChange={evt => this.handleChange(evt)} id='institutuion' placeholder='Instituição' type='institutuion' />
              <input className='inputsDinamico-signUpScreen' value={this.state.situation} onChange={evt => this.handleChange(evt)} id='situation' placeholder='Situação' type='situation' />
              <input className='inputsDinamico-signUpScreen' id='function' placeholder='Função' type='function' value={this.state.function} onChange={evt => this.handleChange(evt)}/>
              </div>
          </div>
          <div className='fieldsLab-signUpScreen'>
            <input className='inputs-signUpScreen' id='name' placeholder='Nome Completo' type='name' value={this.state.name} onChange={evt => this.handleChange(evt)}/>
            <input className='inputs-signUpScreen' id='email' placeholder='Email' type='email' value={this.state.email} onChange={evt => this.handleChange(evt)} />
            <input className='inputs-signUpScreen' id='facebook' placeholder='Facebook' type='facebook' value={this.state.facebook} onChange={evt => this.handleChange(evt)}/>
            <input className='inputs-signUpScreen' id='linkedin' placeholder='Linkedin' type='linkedin' value={this.state.linkedin} onChange={evt => this.handleChange(evt)}/>
            <input className='inputs-signUpScreen' id='unity' placeholder='Unidade' type='unity' value={this.state.unity} onChange={evt => this.handleChange(evt)}/>
            <input className='inputs-signUpScreen' id='course' placeholder='Curso' type='course' value={this.state.course} onChange={evt => this.handleChange(evt)}/>
            <input className='inputs-signUpScreen' id='cpf' placeholder='CPF' type='cpf' value={this.state.cpf} onChange={evt => this.handleChange(evt)}/>
            <input className='inputs-signUpScreen' id='password' placeholder='Senha' type='password' value={this.state.password} onChange={evt => this.handleChange(evt)}/>
            <input className='inputs-signUpScreen' id='password' placeholder='Confirmar Senha' type='password' />
            <div className='buttons-signUpScreen'>
              <button className='buttonVoltar-signUpScreen'>
                Voltar
              </button>
              <button className='buttonSalvar-signUpScreen' onClick={this.addAluno.bind(this)} >
                Salvar
              </button>
            </div>
          </div>
        </div>
      </div>
      );

    }

}

export default SignUpScreen;
