import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import './HomePage.css';
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
import Navbar from "../ComponentsSempreUEA/Navbar";
import Login from "../ComponentsSempreUEA/Login";
import profile from "assets/img/faces/christian.jpg";

import bb from "assets/img/faces/bb.jpg";
import leticia from "assets/img/faces/leticia.jpg";
import wesley from "assets/img/faces/wesley.jpg";
import francisco from "assets/img/faces/francisco.jpg";
import enrique from "assets/img/faces/enrique.jpg";
import edson from "assets/img/faces/edson.jpg";
import queiroz from "assets/img/faces/queiroz.jpg";
import evandro from "assets/img/faces/evandro.jpg";

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


import Global from 'views/Components/global'
import camera from 'assets/img/faces/profile_default.png';

import homePageStyle from "assets/jss/material-kit-react/views/homePage.jsx";

class HomePage extends React.Component {
    constructor(){
        super();
        this.state = {
            alunos: [],
            selected: ''
        } 
    }

    componentDidMount(){
      var request = {
          method: 'get'
      }
      fetch(Global.API_URL + '/alunos/8', request).then((response) => {
          response.json().then((data) => {
              console.log(data.alunos)
              this.setState({alunos:data.alunos}) 
          });      
      }).catch((e) => {
          console.log(e);
          alert('Houve um erro ao adicionar Aluno, tente novamente mais tarde');
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
    return (
      <div>
        <Navbar/>
        <Parallax filter image={require("assets/img/home-bg.jpg")}>
        <div className={classes.container}>

            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h2 className={classes.title}>Bem Vindo ao Sempre UEA</h2>
                <h4>
                O Sempre UEA é uma plataforma onde os alunos e egressos da UEA podem compartilhar
                suas experiências após a faculdade. Aqui você poderá conhecer alunos e ex-alunos e
                suas trajetórias, e também pode compartilhar sua história com os outros colegas
                </h4>
                <br />
              </GridItem>
              <GridItem xs={12} sm={12} md={6} className = "hiddenOnSmallScreen">
                <Login/>
              </GridItem>
            </GridContainer>
          
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              
              {/* <div className={classes.description}>
                <p>
                  An artist of considerable range, Chet Faker — the name taken
                  by Melbourne-raised, Brooklyn-based Nick Murphy — writes,
                  performs and records all of his own music, giving it a warm,
                  intimate feel with a solid groove structure.{" "}
                </p>
              </div> */}

              <div className={classes.description}>
                  <h2 className={classes.titleEgressos}>
                    ALUNOS
                  </h2>

              </div>
              <GridContainer className={classes.egressosContainer}>
              {this.state.alunos.slice(0,4).map(c => 
                <GridItem xs={6} sm={6} md={3}>
                <div className={classes.profile}>
                   <div>
                     <img onError={this.handleError} src={Global.API_URL + '/imgs/uploads/' + c.id + '.png?v=' + Date.now()} alt="..." className={imageClasses} />
                   </div>
                   <div className={classes.name}>
                     <h4 className={classes.egressos}>{c.nome}</h4>
                     <h6 className={classes.egressosProfession}>{c.curso}</h6>
                     <Button justIcon link className={classes.margin5}>
                       <i className={"fab fa-linkedin"} />
                     </Button>
                     <Button justIcon link className={classes.margin5}>
                       <i className={"fab fa-whatsapp"} />
                     </Button>
                     <Button justIcon link className={classes.margin5}>
                       <i className={"fab fa-facebook"} />
                     </Button>
                   </div>
                 </div>
               </GridItem>
              )}
              </GridContainer>
              <GridContainer className={classes.egressosContainer}>
              {this.state.alunos.slice(4,8).map(c => 
                <GridItem xs={6} sm={6} md={3}>
                <div className={classes.profile}>
                   <div>
                     <img onError={this.handleError} src={Global.API_URL + '/imgs/uploads/' + c.id + '.png?v=' + Date.now()} alt="..." className={imageClasses} />
                   </div>
                   <div className={classes.name}>
                     <h4 className={classes.egressos}>{c.nome}</h4>
                     <h6 className={classes.egressosProfession}>{c.curso}</h6>
                     <Button justIcon link className={classes.margin5}>
                       <i className={"fab fa-linkedin"} />
                     </Button>
                     <Button justIcon link className={classes.margin5}>
                       <i className={"fab fa-whatsapp"} />
                     </Button>
                     <Button justIcon link className={classes.margin5}>
                       <i className={"fab fa-facebook"} />
                     </Button>
                   </div>
                 </div>
               </GridItem>
              )}
              </GridContainer>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(homePageStyle)(HomePage);
