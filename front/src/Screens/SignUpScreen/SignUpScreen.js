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
          alert('Cadastro Realizado com Sucesso')
          // this.props.history.push('/login')
      }); 
      alert('Cadastro Realizado com Sucesso')     
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
    console.log(this.havePhoto)
    this.havePhoto = false;
    this.setState({
      imageURL : camera
    })
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
    console.log(this.state.situation);  
    return(
      <div>
        <header>
          <Header></Header>
        </header>
        <p className='labTitle-signUpScreen'>Cadastro do Usuário</p>
        <div className='componentsLab-signUpScreen'>
          <div className='imgLogo-signUpScreen'>
              {$imagePreview}
              {this.state.situation==='0' ? $infoDiscente : $infoEgresso}
          </div>
          <div className='fieldsLab-signUpScreen'>
            <input className='inputs-signUpScreen' value={this.state.name} onChange={evt => this.handleChange(evt)} id='name' placeholder='Nome Completo' type='name'/>
            <input className='inputs-signUpScreen' value={this.state.email} onChange={evt => this.handleChange(evt)} id='email' placeholder='Email' type='email' />
            <input className='inputs-signUpScreen' value={this.state.facebook} onChange={evt => this.handleChange(evt)} id='facebook' placeholder='Facebook' type='facebook' />
            <input className='inputs-signUpScreen' value={this.state.linkedin} onChange={evt => this.handleChange(evt)} id='linkedin' placeholder='Linkedin' type='linkedin' />
            <div className="fieldsLabSide-signUpScreen">
              <Dropdown value={''+this.state.course} controlClassName='myControlClassName' className='inputsSide-signUpScreen' options={this.cursos} onChange={this.selectCurso.bind(this)} placeholder="Curso" />
              <Dropdown value={''+this.state.unity} controlClassName='myControlClassName' className='inputsSide-signUpScreen' options={this.unidades} onChange={this.selectUnidade.bind(this)} placeholder="Unidade" />
              {/**              
              <input className='inputsSide-signUpScreen' value={this.state.unity} onChange={evt => this.handleChange(evt)} id='unity' placeholder='Unidade' type='unity' />             
              <input className='inputsSide-signUpScreen' value={this.state.course} onChange={evt => this.handleChange(evt)} id='course' placeholder='Curso' type='course' />
              */}
              </div>
            <input className='inputs-signUpScreen' value={this.state.cpf} onChange={evt => this.handleChange(evt)} id='cpf' placeholder='CPF' type='cpf' />
            <input className='inputs-signUpScreen' value={this.state.password} onChange={evt => this.handleChange(evt)} id='password' placeholder='Senha' type='password' />
            <input className='inputs-signUpScreen' placeholder='Confirmar Senha' type='password' />
            <div className='buttons-signUpScreen'>
              <button className='buttonVoltar-signUpScreen' onClick={() => this.props.history.push('/login')}>
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
