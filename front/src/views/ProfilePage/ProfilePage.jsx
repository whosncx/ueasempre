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
      console.log(this.props.match.params)
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
          });
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
        });
      }).catch((e) => {
        sessionStorage.setItem('jwtToken', '');
        alert('Houve um erro ao listar perfil, tente novamente mais tarde');
        this.props.history.push('/login');
      });  
      
      
  }
  
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
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
                      <img src={profile} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                    <h3 className={classes.title}>{this.state.name}</h3>
                      <h6>DBA</h6>
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-twitter"} />
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-instagram"} />
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-facebook"} />
                      </Button>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>   
                    <p id="cpf"> cpf: {this.state.cpf}</p>
                    <h id='unity' placeholder='Unidade' type='unity'><h>Unidade: </h>{this.state.unity}</h> 
                    <p type='entryYear'>Ano de Ingresso: {this.state.entryYear}</p>       
                    <h id='course' placeholder='Curso' type='course'><h>Curso: </h>{this.state.course}</h>
                    <p type='exitYear'>Ano de Egresso: {this.state.exitYear? this.state.exitYear: ""}</p>       
                    <p type='email' >Email: {this.state.email}</p>
                    <p type='facebook' >Facebook: {this.state.facebook}</p>
                    <p type='linkedin' >Linkedin: {this.state.linkedin}</p>
                    <p type='Lattes' >Lattes: {this.state.lattes}</p>
                    <p  type='whatsapp' >Whatsapp: {this.state.whatsapp}</p>

                    <a href='/'><button>Voltar</button></a>
                    <a href='/cadastro'><button className='grid-registerButtonBoxLeft'>Editar</button></a>
                  
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
