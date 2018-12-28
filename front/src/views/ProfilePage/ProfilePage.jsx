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

import "./ProfilePage.css";

import Global from './../Components/global'
import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

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
    e.target.src = profile;
  }

  openLink(link){
    if(link==='' || link===null){
      alert('Nenhuma pagina adicionada')
    } else{ 
      window.open(link);
    }
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
      edit = <a href='/register-page'><Button color="primary" className='grid-registerButtonBoxLeft'>Editar</Button></a>
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
                      
                      <img onError={this.handleError} src={Global.API_URL + '/imgs/uploads/' + this.state.cpf + '.png?v=' + Date.now()} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                    <h3 className={classes.title}>{this.state.name}</h3>
                    <br/>
                      
                      <Button onClick={() => this.openLink(this.state.linkedin)} justIcon link className={classes.margin5}>
                        <i className={"fab fa-linkedin"} />
                      </Button>
                      <Button onClick={() => this.openLink(this.state.facebook)} justIcon link className={classes.margin5}>
                        <i className={"fab fa-facebook"} />
                      </Button>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>   
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={6}>
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={12}>
                            <p id='unity' placeholder='Unidade' type='unity'><strong>Unidade: </strong>{this.state.unity}</p>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={12}>
                            <p id='course' placeholder='Curso' type='course'><strong>Curso: </strong>{this.state.course}</p>
                          </GridItem>

                          <GridItem xs={12} sm={12} md={12}>
                            <p type='entryYear'><strong>Ano de Ingresso: </strong>{this.state.entryYear}</p>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={12}>
                            <p type='exitYear'><strong>Ano de Egresso: </strong>{this.state.exitYear? this.state.exitYear: ""}</p>
                          </GridItem>
                        </GridContainer>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={6}>
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={12}>
                            <p type='email' ><strong>Email: </strong>{this.state.email}</p>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={12}>
                            <p type='Lattes' ><strong>Lattes: </strong>{this.state.lattes}</p>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={12}>
                            <p  type='whatsapp' ><strong>Whatsapp: </strong>{this.state.whatsapp}</p>
                          </GridItem>
                        </GridContainer>
                      </GridItem>
                    </GridContainer>
                    {/* <p id="cpf"> cpf: {this.state.cpf}</p> */}

                    <br/>
                    <div className={classes.centerContainer}>
                      <a href='/list'><Button>Voltar</Button></a>
                      {edit}
                    </div>
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
        <Footer />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);
