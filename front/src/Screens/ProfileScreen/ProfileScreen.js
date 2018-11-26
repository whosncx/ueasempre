import React, {Component} from 'react';
import './ProfileScreen.css';

//App Components

//external components
import user from '../../Assets/user.png';
import Header from '../../Components/Header/Header';
import Global from '../../Components/global'
import userImg from '../../Assets/user.png';
import Dropdown from 'react-dropdown'

class ProfileScreen extends Component{
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
      console.log(sessionStorage.getItem('jwtToken'))
      fetch(Global.API_URL + '/perfilaluno', {
        headers : new Headers({
          'x-access-token' : sessionStorage.getItem('jwtToken')
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
    let $infoDiscente = (
      <div> 
        <p className='grid-registerAcademicText'>Aluno/Egresso</p>
        <p className='grid-registerAcademicDropdown'>{this.state.situation==0? 'discente' : 'egresso'}</p>
        <p className='grid-registerAcademicText'>Ano de Ingresso</p>
        <p className='grid-registerAcademicInput' >{this.state.entryYear}</p>
        <p className='grid-registerAcademicText'>Situação</p>
        <p className='grid-registerAcademicDropdown'>{this.selectDiscSituation()}</p>
        {this.state.discente_situation!=='0' ? <div>
          <p className='grid-registerAcademicText'>Instituição</p>
          <p className='grid-registerAcademicInput'>{this.state.disc_institutuion}</p>
          <p className='grid-registerAcademicText'>Função</p>
          <p className='grid-registerAcademicInput'>{this.state.disc_function}</p>
        </div>:<div/>}
      </div>
    );
    let $infoEgresso = (
      <div> 
        <p className='grid-registerAcademicText'>Aluno/Egresso</p>
        <p >{this.state.situatio==0? 'discente' : 'egresso'}</p>
        <p className='grid-registerAcademicText'>Ano de Ingresso</p>
        <p className='grid-registerAcademicInput'>{this.state.entryYear}</p>
        <p className='grid-registerAcademicText'>Ano de Egresso</p>
        <p className='grid-registerAcademicInput'>{this.state.exitYear}</p>
        <p className='grid-registerAcademicText'>Situação</p>
        <p className='grid-registerAcademicDropdown'>{this.selectEgressoSituation()}</p>
        {this.state.egresso_situation!=='0' ? <div>
          <p className='grid-registerAcademicText'>Instituição</p>
          <p className='grid-registerAcademicInput'>{this.state.egresso_institutuion}</p>
          <p className='grid-registerAcademicText'>Função</p>
          <p className='grid-registerAcademicInput'>{this.state.egresso_function}</p>
        </div> : <div/>}
      </div>
    );
    return(
      <div>
        <header>
        
          <Header></Header>
        </header>
        <section className='grid-profile'>
          <article className='grid-profileTop topp'>
            <h1 className='grid-profileTopTitle'>Perfil do Usuário</h1>
          </article>
          <article className='grid-profilePhoto photo'>
            <img onError={this.handleError} src={this.state.imageURL} className='grid-profilePhotoImg' alt='foto' src={user}/>
            <p className='grid-profilePhotoText'>{this.state.name}</p>
          </article>
          <article className='grid-profilePersonal personal'>
            {/* <h2 className='grid-profilePersonalTitle'>Pessoal</h2> */}
            <p className='grid-profilePersonalText'>Nome Completo</p>
            <p disabled className='grid-profilePersonalInput' placeholder='Seu nome completo' type='name'>{this.state.name}</p>
            <p className='grid-profilePersonalText'>Email</p>
            <p disabled className='grid-profilePersonalInput' placeholder='Seu email' type='email' >{this.state.email}</p>
            <p className='grid-profilePersonalText'>Facebook</p>
            <p disabled className='grid-profilePersonalInput' placeholder='Sua página do Facebook' type='facebook' >{this.state.facebook}</p>
            <p className='grid-profilePersonalText'>Linkedin</p>
            <p disabled className='grid-profilePersonalInput' placeholder='Sua página do Linkedin' type='linkedin' >{this.state.linkedin}</p>
            <p className='grid-profilePersonalText'>CPF</p>
            <p disabled className='grid-profilePersonalInput' placeholder='Seu CPF' type='cpf' >{this.state.cpf}</p>
          </article>
          <article className='grid-profileAcademic academic'>
            {/* <h2 className='grid-profileAcademicTitle'>Academico</h2> */}
            {this.state.situation==='0' ? $infoEgresso :  $infoDiscente}
          </article>
          <article className='grid-profileButton button'>
            <a href='/'><button className='grid-profileButtonBoxRight'>Voltar</button></a>
            <a href='/cadastro'><button className='grid-registerButtonBoxLeft'>Editar</button></a>
          </article>
        </section>
      </div>    
    );
  } 
}

export default ProfileScreen;