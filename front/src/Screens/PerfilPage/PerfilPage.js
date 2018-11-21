import React, {Component} from 'react';
import './PerfilPage.css';

import Global from '../../Components/global'
import Header from '../../Components/Header/Header';
import userImg from '../../Assets/user.png';
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
      situation: '',
      disc_institutuion : '',
      disc_situation: '',
      disc_function:'',
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
            situation: data.situacao,
            disc_situation : data.discente_situacao,
            disc_function: data.discente_funcao,
            disc_institutuion : data.discente_inst,
            egresso_situation : data.egresso_situacao,
            egresso_function: data.egresso_funcao,
            egresso_institutuion : data.egresso_inst,
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
    selectDiscSituation(){
      switch(this.state.disc_situation){
        case 0: return 'Não Trabalha';
        case 1: return 'Bolsista';
        case 2: return 'Estagiario';
        case 3: return 'CLT';
        case 4: return 'Outros';
      }
    }

    selectEgressoSituation(){
      switch(this.state.disc_situation){
        case 0: return 'Não Trabalha';
        case 1: return 'Bolsista Pós Graduação';
        case 3: return 'CLT';
        case 4: return 'Outros';
      }
    }

    handleError(e){
      e.target.src = userImg;
    }

  render(){

        console.log(this.state.situation)
    let $imagePreview = null;
      $imagePreview = (
      <div className="labImgContainer">
          <img onError={this.handleError} src={this.state.imageURL} className="labImg" alt={this.state.labNome} height='195' width='195'/>
          <div className="imgLogoSubTitle-signUpScreen">

            <h ref={(ref) => { this.uploadInput = ref; }} className="changePicInput" type="file" id="Imagem" name="Imagem" onChange={evt => this.fileChangedHandler(evt)} ></h>
            
          </div>
      </div> );
    return(
      <div>
        <header>
          <Header></Header>
        </header>
        <div className='componentsLab-signUpScreen'>
          <div className='imgLogo-signUpScreen'>
              {$imagePreview}
              <div className='fieldsLabDinamico-signUpScreen'> 
              <h className='inputsDinamico-signUpScreen' id='situation' placeholder='Situação' type='situation'>{this.state.situation==0 ? 'Discente' : 'Egresso'}</h>
              <h className='inputsDinamico-signUpScreen' id='entryYear' placeholder='Ano de Ingresso' type='entryYear'><h>Ingresso: </h>{this.state.entryYear}</h>
              {
                this.state.situation ? 
                <h className='inputsDinamico-signUpScreen' id='exitYear' placeholder='Ano de Egresso' type='exitYear'><h>Conclusão: </h>{this.state.exitYear}</h> : 
                <h/>
              }
              {!this.state.situation ? <h className='inputsDinamico-signUpScreen' id='disc_situacao' placeholder='Situação' type='disc_situacao'>{this.selectDiscSituation()}</h>
              :<h className='inputsDinamico-signUpScreen' id='egresso_situacao' placeholder='Situação' type='egresso_situacao'>{this.selectEgressoSituation()}</h>
              }
              {!this.state.situation && this.state.disc_situation!==0 ? 
              <h>
                <h className='inputsDinamico-signUpScreen' id='disc_institutuion' placeholder='Instituição' type='disc_institutuion'><h>Instituição: </h>{this.state.disc_institutuion}</h>
                <h className='inputsDinamico-signUpScreen' id='disc_function' placeholder='Função' type='disc_function'><h>Função: </h>{this.state.disc_function}</h>             
              </h>: <h/>}
              {this.state.situation && this.state.egresso_situation!==0 ? 
              <h>
                <h className='inputsDinamico-signUpScreen' id='egresso_institutuion' placeholder='Instituição' type='egresso_institutuion'><h>Instituição: </h>{this.state.egresso_institutuion}</h>
                <h className='inputsDinamico-signUpScreen' id='egresso_function' placeholder='Função' type='egresso_function'><h>Função: </h>{this.state.egresso_function}</h>             
              </h>: <h/>}
          </div>
          </div>
          <div className='fieldsLab-signUpScreen'>
            <h className='inputs-signUpScreen' id='name' placeholder='Nome Completo' type='name'><h>Nome: </h>{this.state.name} </h>
            <h className='inputs-signUpScreen' id='email' placeholder='Email' type='email'><h>Email: </h>{this.state.email} </h>
            <h className='inputs-signUpScreen' id='facebook' placeholder='Facebook' type='facebook'>{this.state.facebook}</h>
            <h className='inputs-signUpScreen' id='linkedin' placeholder='Linkedin' type='linkedin'><h>Linkedin: </h>{this.state.linkedin} </h>
            <h className='inputs-signUpScreen' id='unity' placeholder='Unidade' type='unity'><h>Unidade: </h>{this.state.unity}</h>             
            <h className='inputs-signUpScreen' id='course' placeholder='Curso' type='course'><h>Curso: </h>{this.state.course}</h>
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
