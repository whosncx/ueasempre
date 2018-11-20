import React, {Component} from 'react';
import './PerfilPage.css';

import Global from '../../Components/global'
import camera from '../../Assets/photo-camera.svg';
import Header from '../../Components/Header/Header';
import { Link } from 'react-router-dom';
import 'react-dropdown/style.css'

class PerfilPage extends Component{
  cursos = []
  unidades = []
  situacao=[{value:'0', label:'discente'}, {value:'1', label:'egresso'}]
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
      facebook: '',
      imageURL: ''
    }
  }

  componentDidMount() {

      fetch(Global.API_URL + '/perfilaluno', {
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
        console.log(this.uploadInput.files[0]);
        const form = new FormData();
        form.append('file', this.uploadInput.files[0]);
        form.append('filename', data.id + '.png')
    
        fetch('http://localhost:5000/upload', {
          method: 'POST',
          body: form,
        }).then((response) => {
          response.json().then((body) => {
            this.setState({ imageURL: `http://localhost:5000/${body.file}` });
          });
        });
        alert('Cadastro Realizado com Sucesso')
        this.props.history.push('/login')
      });      
    }).catch((e) => {
      console.log(e);
      alert('Houve um erro ao adicionar Aluno, tente novamente mais tarde');
    });
  }

  fileChangedHandler = (evt) => {
    const file = evt.target.files[0];
    let reader = new FileReader();
    reader.onload = (e) => {
      this.setState({
        imageURL: e.target.result,
      });
    };
    if(file){
      reader.readAsDataURL(file);
    }
  } 

  selectSituation(evt){
    this.setState({
      situation: evt.value
    })
  }

  selectCurso(evt){
    this.setState({
      course: evt.value
    })
  }

  selectUnidade(evt){
    this.setState({
      unity: evt.value
    })
  }

  handleError(){
    this.setState({
      imageURL : camera
    })
  }

    goBack() {
        this.props.history.push('/alunos'); // Imprementar com goBack()
    }
  render(){
    console.log(this.situacao);
    console.log(this.cursos);
    let $imagePreview = null;
      $imagePreview = (
      <div className="labImgContainer">
          <img onError={this.handleError.bind(this)} src={this.state.imageURL} className="labImg" alt={this.state.labNome} height='195' width='195'/>
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
              <h className='inputsDinamico-signUpScreen' value={this.state.entryYear}  id='entryYear' placeholder='Ano de Ingresso' type='entryYear'  />
              <h className='inputsDinamico-signUpScreen' value={this.state.exitYear}  id='exitYear' placeholder='Ano de Egresso' type='exitYear' />
              <h className='inputsDinamico-signUpScreen' value={this.state.institutuion}  id='institutuion' placeholder='Instituição' type='institutuion' />
              
              <h className='inputsDinamico-signUpScreen' value={this.state.situation} onChange={evt => this.handleChange(evt)} id='situation' placeholder='Situação' type='situation' />
              <h className='inputsDinamico-signUpScreen' id='function' placeholder='Função' type='function' value={this.state.function} />
              </div>
          </div>
          <div className='fieldsLab-signUpScreen'>
            <h className='inputs-signUpScreen' value={this.state.name}  id='name' placeholder='Nome Completo' type='name'/>
            <h className='inputs-signUpScreen' value={this.state.email}  id='email' placeholder='Email' type='email' />
            <h className='inputs-signUpScreen' value={this.state.facebook}  id='facebook' placeholder='Facebook' type='facebook' />
            <h className='inputs-signUpScreen' value={this.state.linkedin}  id='linkedin' placeholder='Linkedin' type='linkedin' />
            <div className="fieldsLabSide-signUpScreen">        
              <h className='inputsSide-signUpScreen' value={this.state.unity} id='unity' placeholder='Unidade' type='unity' />             
              <h className='inputsSide-signUpScreen' value={this.state.course} id='course' placeholder='Curso' type='course' />
             
              </div>
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
