import React, {Component} from 'react';
import './SignUpScreen.css';

import Global from '../../Components/global'
import camera from '../../Assets/photo-camera.svg';
import Header from '../../Components/Header/Header';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

class SignUpScreen extends Component{
  cursos = []
  unidades = []
  havePhoto = true;
  situacao=[{value:'0', label:'discente'}, {value:'1', label:'egresso'}]
  discente_situacao=[{value:'0', label:'Não Trabalha'}, {value:'1', label:'Bolsista'}, {value:'2', label:'Estágio'}, {value:'3', label:'Clt'}, {value:'4', label:'Outros'}]
  egresso_situacao=[{value:'0', label:'Não Trabalha'}, {value:'1', label:'Bolsista pos-graduação'}, {value:'2', label:'Clt'}, {value:'3', label:'Outros'}]
  constructor(){
    super();
    this.havePhoto = true;
    this.state = {
      cpf: '',
      password: '',
      name: '',
      email:'',
      linkedin:'',
      facebook: '',
      whatsapp: '',
      situation: '',
      unity: '',
      course: '',
      entryYear:'',
      exitYear: '',
      discente_situation:'',
      discente_institutuion : '',
      discente_function : '',
      egresso_situation:'',
      egresso_institutuion : '',
      egresso_function : '',
      imageURL: ''
    }
  }

  componentDidMount() {
    const token = sessionStorage.getItem('jwtToken');
    
    fetch(Global.API_URL + '/cursos')
    .then(function(response){
      return response.json();
    })
    .then(data => {
      data.forEach(curso => {
        this.cursos.push({value:''+curso.id, label:curso.sigla});
      });
    })
    .catch((e) => {
      console.log(e);
      alert('Houve um erro ao realizar pegar cursos, tente novamente mais tarde');
    });

    fetch(Global.API_URL + '/unidades')
    .then(function(response){
      return response.json();
    })
    .then(data => {
      data.forEach(unidade => {
        this.unidades.push({value:''+unidade.id, label:unidade.sigla});
      });
    })
    .catch((e) => {
      console.log(e);
      alert('Houve um erro ao realizar pegar unidades, tente novamente mais tarde');
    });

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
          this.setState({
            name: data.nome,
            email: data.email,
            linkedin: data.linkedin,
            unity: data.unidade,
            course: data.curso,
            cpf: data.cpf,
            password: data.senha,
            facebook: data.facebook,
            entryYear: data.ano_ingresso,
            exitYear: data.ano_conclusao,
            situation: ''+data.situacao,
            discente_institutuion : data.discente_inst,
            discente_function :data.discente_funcao,
            discente_situation : ''+data.discente_situacao,            
            egresso_institutuion : data.egresso_inst,
            egresso_function :data.egresso_funcao,
            egresso_situation : ''+data.egresso_situacao,          
            imageURL: Global.API_URL + '/imgs/uploads/' + data.cpf + '.png?v=' + Date.now()
          })
        });
      }).catch((e) => {
        sessionStorage.setItem('jwtToken', '');
        alert('Houve um erro ao listar perfil, tente novamente mais tarde');
        this.props.history.push('/login');
      });
    }    
  }

  addAluno(){
    const token = sessionStorage.getItem('jwtToken');
    var request = {};
    var body = JSON.stringify({
      "name": this.state.name,
      "email": this.state.email,
      "linkedin": this.state.linkedin,
      "unity": this.state.unity,
      "course": this.state.course,
      "cpf": this.state.cpf,
      "password": this.state.password,
      "facebook": this.state.facebook,
      "entryYear": this.state.entryYear,
      "exitYear": (this.state.exitYear==""? 0 : this.state.exitYear),
      "situation": this.state.situation,
      "discente_institutuion" : this.state.discente_institutuion,
      "discente_situation": (this.state.discente_situation=="null" || this.state.discente_situation=="" ? 0 : this.state.discente_situation),
      "discente_function": this.state.discente_function,
      "egresso_institutuion" : this.state.egresso_institutuion,
      "egresso_situation": ((this.state.egresso_situation=="null" || this.state.egresso_situation=="") ? 0 : this.state.egresso_situation),
      "egresso_function": this.state.egresso_function,
    })
    console.log(body)
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

    function toBase64(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function() {
            var reader = new FileReader();
            reader.onloadend = function() {
                callback(reader.result);
            }
            reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send();
      }

    fetch(Global.API_URL + '/cadastro', request).then((response) => {
      response.json().then((data) => {
          var file = this.uploadInput.files[0]
          const form = new FormData();
          form.append('file', file);

          // toBase64(camera, function(dataUrl) {
          //   this.state.imageURL =  dataUrl 
          // })
          // console.log(this.state.imageURL)
          form.append('filename', data.id + '.png')
    
          fetch('http://localhost:5000/upload', {
            method: 'POST',
            body: form,
          }).then((response) => {
            response.json().then((body) => {
              this.setState({ imageURL: `http://localhost:5000/${body.file}` });
            });
          });
          // alert('Cadastro Realizado com Sucesso')
          // this.props.history.push('/login')
      }); 
      alert('Cadastro Realizado com Sucesso')     
    }).catch((e) => {
      console.log(e);
      alert('Houve um erro ao adicionar Aluno, tente novamente mais tarde');
    });
  }

  fileChangedHandler = (evt) => {
    console.log(evt.target.files[0]);
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

  selectDiscenteSituation(evt){
    this.setState({
      discente_situation: evt.value
    })
  }

  selectEgressoSituation(evt){
    this.setState({
      egresso_situation: evt.value
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
      case 'discente_institutuion':
        this.setState({
          discente_institutuion : evt.target.value
        });
      break;
      case 'egresso_institutuion':
        this.setState({
          egresso_institutuion : evt.target.value
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
      
      case 'discente_function':
        this.setState({
          discente_function : evt.target.value
        });
      break;
      
      case 'egresso_function':
        this.setState({
          egresso_function : evt.target.value
        });
      break;
    }
  }


  handleError(){
    this.setState({
      imageURL : camera
    })
    this.havePhoto = false;
  }

  render(){
    let $imagePreview = null;
      $imagePreview = (
      <div className="labImgContainer">
          <img onError={this.handleError.bind(this)} src={this.state.imageURL} className="labImg" alt={this.state.labNome} height='195' width='195'/>
          <div className="imgLogoSubTitle-signUpScreen">

            <input ref={(ref) => { this.uploadInput = ref; }} className="changePicInput" type="file" id="Imagem" name="Imagem" onChange={evt => this.fileChangedHandler(evt)} ></input>
            
          </div>
      </div> );
    let $infoDiscente = (
      <div className='fieldsLabDinamico-signUpScreen'> 
        <Dropdown value={''+this.state.situation} className='inputsDinamico-signUpScreen' options={this.situacao} onChange={this.selectSituation.bind(this)} />
        <input className='inputsDinamico-signUpScreen' value={this.state.entryYear} onChange={evt => this.handleChange(evt)} id='entryYear' placeholder='Ano de Ingresso' type='entryYear'  />
        <Dropdown value={''+this.state.discente_situation} className='inputsDinamico-signUpScreen' options={this.discente_situacao} onChange={this.selectDiscenteSituation.bind(this)} />
        {this.state.discente_situation!=='0' ? <div>
          <input className='inputsDinamico-signUpScreen' value={this.state.discente_institutuion} onChange={evt => this.handleChange(evt)} id='discente_institutuion' placeholder='Instituição' type='discente_institutuion' />
          <input className='inputsDinamico-signUpScreen' value={this.state.discente_function} onChange={evt => this.handleChange(evt)} id='discente_function' placeholder='Função' type='discente_function' />
        </div>:<div/>}
      </div>
    );
    let $infoEgresso = (
      <div className='fieldsLabDinamico-signUpScreen'> 
        <Dropdown value={''+this.state.situation} className='inputsDinamico-signUpScreen' options={this.situacao} onChange={this.selectSituation.bind(this)} />
        <input className='inputsDinamico-signUpScreen' value={this.state.entryYear} onChange={evt => this.handleChange(evt)} id='entryYear' placeholder='Ano de Ingresso' type='entryYear'  />
        <input className='inputsDinamico-signUpScreen' value={this.state.exitYear} onChange={evt => this.handleChange(evt)} id='exitYear' placeholder='Ano de Egresso' type='exitYear' />
        <Dropdown value={''+this.state.egresso_situation} className='inputsDinamico-signUpScreen' options={this.egresso_situacao} onChange={this.selectEgressoSituation.bind(this)} />
        {this.state.egresso_situation!=='0' ? <div>
          <input className='inputsDinamico-signUpScreen' value={this.state.egresso_institutuion} onChange={evt => this.handleChange(evt)} id='egresso_institutuion' placeholder='Instituição' type='egresso_institutuion' />
          <input className='inputsDinamico-signUpScreen' value={this.state.egresso_function} onChange={evt => this.handleChange(evt)} id='egresso_function' placeholder='Função' type='egresso_function' />
        </div> : <div/>}
      </div>
    );
   return(
      <div>
        <header>
          <Header></Header>
        </header>
        <section className='grid-register'>
          <article className='grid-registerTop topp'>
            <h1 className='grid-registerTopTitle'>Cadastro do Usuário</h1>
          </article>
          <article className='grid-registerPhoto photo'>
            <img className='grid-registerPhotoImg' src={camera}/>
            <p className='grid-registerPhotoText'>insira uma foto <a href='#'>aqui</a></p>
          </article>
          <article className='grid-registerPersonal personal'>
            <p className='grid-registerPersonalText'>Nome Completo</p>
            <input className='grid-registerPersonalInput' placeholder='Seu nome completo' type='name'/>
            <p className='grid-registerPersonalText'>Email</p>
            <input className='grid-registerPersonalInput' placeholder='Seu email' type='email' />
            <p className='grid-registerPersonalText'>Facebook</p>
            <input className='grid-registerPersonalInput' placeholder='Sua página do Facebook' type='facebook' />
            <p className='grid-registerPersonalText'>Linkedin</p>
            <input className='grid-registerPersonalInput' placeholder='Sua página do Linkedin' type='linkedin' />
            <p className='grid-registerPersonalText'>CPF</p>
            <input className='grid-registerPersonalInput' placeholder='Seu CPF' type='cpf' />
            <p className='grid-registerPersonalText'>Senha</p>
            <input className='grid-registerPersonalInput' placeholder='Insira sua senha' type='password' />
            <p className='grid-registerPersonalText'>Confirmar Senha</p>
            <input className='grid-registerPersonalInput' placeholder='Confirme sua senha' type='password' />
          </article>
          <article className='grid-registerAcademic academic'>
            <p className='grid-registerAcademicText'>Ano de Ingresso</p>
            <input className='grid-registerAcademicInput' placeholder='Ano de Ingresso' type='entryYear'/>
            <p className='grid-registerAcademicText'>Ano de Egresso</p>
            <input className='grid-registerAcademicInput' placeholder='Ano de Egresso' type='exitYear' />
            <p className='grid-registerAcademicText'>Instituição</p>
            <input className='grid-registerAcademicInput' placeholder='Instituição' type='institutuion' />
            <p className='grid-registerAcademicText'>Unidade</p>
            <input className='grid-registerAcademicInput' placeholder='Unidade' type='unity' /> 
            <p className='grid-registerAcademicText'>Curso</p>              
            <input className='grid-registerAcademicInput' placeholder='Curso' type='course' />
            <p className='grid-registerAcademicText'>Situação</p>
            <input className='grid-registerAcademicInput' placeholder='Situação' type='situation' />
            <p className='grid-registerAcademicText'>Função</p>
            <input className='grid-registerAcademicInput' placeholder='Função' type='function' />
          </article>
          <article className='grid-registerButton button'>
            <a href='#'><button className='grid-registerButtonBoxRight'>Voltar</button></a>
            <a href='#'><button className='grid-registerButtonBoxLeft'>Salvar</button></a>
          </article>
        </section>
      </div>
      );
    }
}

export default SignUpScreen;