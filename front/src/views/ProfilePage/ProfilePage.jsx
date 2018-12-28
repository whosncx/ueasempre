import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Navbar from "../ComponentsSempreUEA/Navbar.jsx";
import profile from "assets/img/faces/bb.jpg";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import Global from './../Components/global'
import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";
import camera from 'assets/img/faces/profile_default.png';

class ProfilePage extends React.Component {

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
      var id = ''+this.props.match.params.aluno
      if(id!=='undefined'){    
        fetch(Global.API_URL + '/perfilaluno/'+id, {
          headers : new Headers({
          })
        }).then((response) => {       
          response.json().then((data) => {
            console.log(data)
            this.setState({
              name: data.nome,
              email: data.email,
              linkedin: data.linkedin,
              unity: data.unidade,
              course: data.curso,
              cpf: data.cpf,
              facebook: data.facebook,
              entryYear: data.ano_ingresso,
              exitYear: data.ano_conclusao,
              situation: ''+data.situacao,
              discInstitution: data.discInstitution,
              discFunction: data.discFunction,
              discSituation: ''+data.discSituation, 
              egresInstitution: data.egresInstitution,
              egresSituation: data.egresSituation,
              egresFunction: ''+data.egresFunction,           
              imageURL: Global.API_URL + '/imgs/uploads/' + data.cpf + '.png?v=' + Date.now(),
              lattes: data.lattes,
              whatsapp: data.whatsapp
            })
          }).catch((e) => {
            alert('Houve um erro ao listar perfil, tente novamente mais tarde');
            this.props.history.push('/list');
          });  ;
        }).catch((e) => {
          sessionStorage.setItem('jwtToken', '');
          alert('Houve um erro ao listar perfil, tente novamente mais tarde');
          this.props.history.push('/login');
        });   
        return;
      }
      fetch(Global.API_URL + '/perfilaluno', {
        headers : new Headers({
          'x-access-token' : sessionStorage.getItem('jwtToken')
        })
      }).then((response) => {       
        response.json().then((data) => {
          console.log(data)
          this.setState({
            name: data.nome,
            email: data.email,
            linkedin: data.linkedin,
            unity: data.unidade_nome,
            course: data.curso_nome,
            cpf: data.cpf,
            facebook: data.facebook,
            entryYear: data.ano_ingresso,
            exitYear: data.ano_conclusao,
            situation: ''+data.situacao,
            discInstitution: data.discInstitution,
            discFunction: data.discFunction,
            discSituation: ''+data.discSituation, 
            egresInstitution: data.egresInstitution,
            egresSituation: data.egresSituation,
            egresFunction: ''+data.egresFunction,           
            imageURL: Global.API_URL + '/imgs/uploads/' + data.cpf + '.png?v=' + Date.now(),
            lattes: data.lattes,
            whatsapp: data.whatsapp
          })
        });
      }).catch((e) => {
        sessionStorage.setItem('jwtToken', '');
        alert('Houve um erro ao listar perfil, tente novamente mais tarde');
        this.props.history.push('/login');
      });  
      
      
  }
  handleError(e){
      e.target.src = camera;
  }
  
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    var edit = null;
    if(sessionStorage.getItem('jwtToken') !== null && sessionStorage.getItem('jwtToken') !== ''){
      edit =<Button onClick={()=>this.props.history.push('/register-page')} className='grid-registerButtonBoxLeft'>Editar</Button>
    }
    return (
      <div>
        <Navbar/>
        <Parallax small filter image={require("assets/img/register-bg.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img onError={this.handleError} src={this.state.imageURL} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                    <h3 className={classes.title}>{this.state.name}</h3>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>   
                    <h id='unity' placeholder='Unidade' type='unity'><h>Unidade: </h>{this.state.unity}</h> 
                    <p type='entryYear'>Ano de Ingresso: {this.state.entryYear}</p>       
                    <h id='course' placeholder='Curso' type='course'><h>Curso: </h>{this.state.course}</h>
                    <p type='exitYear'>Ano de Egresso: {this.state.exitYear? this.state.exitYear: ""}</p>      
                    <p type='email' >Email: <a target="_blank" href={'mailto:'+this.state.email}>{this.state.email}</a></p>
                    <p type='facebook' >Facebook: <a target="_blank" href={this.state.facebook}>{this.state.facebook}</a> </p>
                    <p type='linkedin' >Linkedin: <a target="_blank" href={this.state.linkedin}>{this.state.linkedin}</a></p>
                    <p type='Lattes' >Lattes: <a target="_blank" href={this.state.lattes}>{this.state.lattes}</a></p>
                    <p  type='whatsapp' >Whatsapp: {this.state.whatsapp}</p>

                    <Button onClick={()=>this.props.history.push('/list')}>Voltar</Button>
                    {edit}
                  
              </div>
                {/* <p>
                  Formada em Sistema de Informação na Escola Superior de Tecnologia (EST)
                  em 2020, hoje atuo na área de banco de dados, segurança da informação e
                  data science. Ocupo o cargo de DBA na empresa TechPee desde 2022. Moro
                  em Toronto, Canadá desde 2021.
                  <br/><br/><br/><br/><br/><br/>
                  {" "}
                  
                </p> */}
          
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);
