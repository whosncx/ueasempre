import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import './HomePage.css';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Navbar from "../ComponentsSempreUEA/Navbar";
import Login from "../ComponentsSempreUEA/Login";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
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
      fetch(Global.API_URL + '/alunos/12', request).then((response) => {
          response.json().then((data) => {
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

  openLink(link){
    if(link==='' || link===null){
      alert('Nenhuma pagina adicionada')
    } else{ 
      window.open(link);
    }
  }


  render() {
    const { classes } = this.props;
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        <Navbar page={"home"}/>
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
                  ALUNOS E EGRESSOS
                  </h2>

              </div>
              <GridContainer className={classes.egressosContainer}>
              {/* {this.state.alunos.map(c => 
                <GridItem xs={6} sm={6} md={3}>
                <div className={classes.profile}>
                   <div>
                     <img onError={this.handleError} src={Global.API_URL + '/imgs/uploads/' + c.id + '.png?v=' + Date.now()} alt="..." className={imageClasses} />
                   </div>
                   <div className={classes.name}>
                     <h4 className={classes.egressos}>{c.nome}</h4>
                     <h6 className={classes.egressosProfession}>{c.curso}</h6>
                     <Button onClick={() => this.openLink(c.linkedin)} justIcon link className={classes.margin5}>
                       <i className={"fab fa-linkedin"} />
                     </Button>
                     <Button onClick={() => this.openLink(c.facebook)} justIcon link className={classes.margin5}>
                       <i className={"fab fa-facebook"} />
                     </Button>
                   </div>
                 </div>
               </GridItem>
              )} */}
              {this.state.alunos.map(c => 
                <GridItem xs={6} sm={6} md={3}>
                <Card className={classes.profile}>
                   <CardBody>
                   <div>
                     <img onError={this.handleError} src={Global.API_URL + '/imgs/uploads/' + c.id + '.png?v=' + Date.now()} alt="..." className={navImageClasses} />
                   </div>
                   <div className={classes.name}>
                     <h4 className={classes.egressos}>{c.nome}</h4>
                     <h6 className={classes.egressosProfession}>{c.curso}</h6>
                     <Button onClick={() => this.openLink(c.linkedin)} justIcon link className={classes.margin5}>
                       <i className={"fab fa-linkedin"} />
                     </Button>
                     <Button onClick={() => this.openLink(c.facebook)} justIcon link className={classes.margin5}>
                       <i className={"fab fa-facebook"} />
                     </Button>
                   </div>
                   </CardBody>
                 </Card>
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
        <Footer/>
      </div>
    );
  }
}

export default withStyles(homePageStyle)(HomePage);
