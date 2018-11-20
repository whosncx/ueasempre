import React, {Component} from 'react';
import './PerfilPage.css';

import Global from '../../Components/global'
import Header from '../../Components/Header/Header';
import 'react-dropdown/style.css'

class PerfilPage extends Component{
  cursos = []
  unidades = []
  situacao=[{value:'0', label:'discente'}, {value:'1', label:'egresso'}]
  constructor(props){
    super(props);
    
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
      facebook: '',
      imageURL: ''
    }
  }

  componentDidMount() {
      console.log(this.props.match.params)
      fetch(Global.API_URL + '/alunos/'+this.props.match.params.aluno, {
        headers : new Headers({
        })
      }).then((response) => {
       
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
            facebook: data.facebook,
            imageURL: Global.API_URL + '/imgs/uploads/' + data.cpf + '.png?v=' + Date.now()
          })
        });
      }).catch((e) => {
        sessionStorage.setItem('jwtToken', '');
        alert('Houve um erro ao listar perfil, tente novamente mais tarde');
        this.props.history.push('/login');
      });   
  }
    goBack() {
        this.props.history.push('/alunos'); // Imprementar com goBack()
    }
  render(){

        console.log(this.props.params)
    let $imagePreview = null;
      $imagePreview = (
      <div className="labImgContainer">
          <img  src={this.state.imageURL} className="labImg" alt={this.state.labNome} height='195' width='195'/>
          <div className="imgLogoSubTitle-signUpScreen">

            <h ref={(ref) => { this.uploadInput = ref; }} className="changePicInput" type="file" id="Imagem" name="Imagem" onChange={evt => this.fileChangedHandler(evt)} ></h>
            
          </div>
      </div> );
    return(
      <div>
        <header>
          <Header></Header>
        </header>
        <p className='labTitle-signUpScreen'>Cadastro do Usuário</p>
        <div className='componentsLab-signUpScreen'>
          <div className='imgLogo-signUpScreen'>
              {$imagePreview}
              <div className='fieldsLabDinamico-signUpScreen'> 
              <h className='inputsDinamico-signUpScreen' id='entryYear' placeholder='Ano de Ingresso' type='entryYear'>{this.state.entryYear}</h>
              <h className='inputsDinamico-signUpScreen' id='exitYear' placeholder='Ano de Egresso' type='exitYear'>{this.state.exitYear}</h>
              <h className='inputsDinamico-signUpScreen' id='institutuion' placeholder='Instituição' type='institutuion'>{this.state.institutuion}</h>
              
              <h className='inputsDinamico-signUpScreen' id='situation' placeholder='Situação' type='situation'>{this.state.situation ? 'Egresso' : 'Discente'}</h>
              <h className='inputsDinamico-signUpScreen' id='function' placeholder='Função' type='function'>{this.state.function}</h>
              </div>
          </div>
          <div className='fieldsLab-signUpScreen'>
            <h className='inputs-signUpScreen' id='name' placeholder='Nome Completo' type='name'>{this.state.name} </h>
            <h className='inputs-signUpScreen' id='email' placeholder='Email' type='email'>{this.state.email} </h>
            <h className='inputs-signUpScreen' id='facebook' placeholder='Facebook' type='facebook'>{this.state.facebook}</h>
            <h className='inputs-signUpScreen' id='linkedin' placeholder='Linkedin' type='linkedin'>{this.state.linkedin} </h>
            <h className='inputs-signUpScreen' id='unity' placeholder='Unidade' type='unity'>{this.state.unity}</h>             
            <h className='inputs-signUpScreen' id='course' placeholder='Curso' type='course'>{this.state.course}</h>
            <div className='buttons-signUpScreen'>
              <button className='buttonVoltar-signUpScreen' onClick={this.goBack.bind(this)}>voltar</button>
            </div>
          </div>
        </div>
      </div>
      );

    }

}

export default PerfilPage;
