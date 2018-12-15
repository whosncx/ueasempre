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
import Navbar from "../ComponentsSempreUEA/Navbar";
import CardBody from "components/Card/CardBody.jsx";
import Login from "../ComponentsSempreUEA/Login";
import profile from "Assets/img/faces/christian.jpg";

import bb from "Assets/img/faces/bb.jpg";
import leticia from "Assets/img/faces/leticia.jpg";
import wesley from "Assets/img/faces/wesley.jpg";
import francisco from "Assets/img/faces/francisco.jpg";
import enrique from "Assets/img/faces/enrique.jpg";
import edson from "Assets/img/faces/edson.jpg";
import queiroz from "Assets/img/faces/queiroz.jpg";
import evandro from "Assets/img/faces/evandro.jpg";

import studio1 from "Assets/img/examples/studio-1.jpg";
import studio2 from "Assets/img/examples/studio-2.jpg";
import studio3 from "Assets/img/examples/studio-3.jpg";
import studio4 from "Assets/img/examples/studio-4.jpg";
import studio5 from "Assets/img/examples/studio-5.jpg";
import work1 from "Assets/img/examples/olu-eletu.jpg";
import work2 from "Assets/img/examples/clem-onojeghuo.jpg";
import work3 from "Assets/img/examples/cynthia-del-rio.jpg";
import work4 from "Assets/img/examples/mariya-georgieva.jpg";
import work5 from "Assets/img/examples/clem-onojegaw.jpg";

import profilePageStyle from "Assets/jss/material-kit-react/views/profilePage.jsx";
import { Card } from "@material-ui/core";

class ProfilePage extends React.Component {
  alunos = [
    {photo:bb, name:'Natália Cavalcante', profession:'DBA'},
    {photo:leticia, name:'Leticia Vieira', profession:'DESENVOLVEDORA'},
    {photo:wesley, name:'Wesley Rocha', profession:'PROGRAMADOR'},
    {photo:francisco, name:'Francisco', profession:'PROGRAMADOR'},
    {photo:enrique, name:'Enrique Leão', profession:'DESIGNER'},
    {photo:edson, name:'Edson Jr', profession:'EMPREENDEDOR'},
    {photo:queiroz, name:'Gabriel de Queiroz', profession:'DESENVOLVEDOR'},
    {photo:evandro, name:'Evadro Filho', profession:'DESENVOLVEDOR'},
  ]

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
        <Parallax filter image={require("Assets/img/home-bg.jpg")}>
        <div className={classes.container}>

            <GridContainer>
              <GridItem xs={6} sm={6} md={6}>
                <h1 className={classes.title}>Bem Vindo ao Sempre UEA</h1>
                <h4>
                O Sempre UEA é uma plataforma onde os alunos e egressos da UEA podem compartilhar
                suas experiências após a faculdade. Aqui você poderá conhecer alunos e ex-alunos e
                suas trajetórias, e também pode compartilhar sua história com os outros colegas
                </h4>
                <br />
              </GridItem>
              <GridItem xs={6} sm={6} md={6}>
                <div>
                  <GridContainer justify="right">
                    <GridItem xs={0} sm={0} md={4}></GridItem>
                    <GridItem xs={12} sm={12} md={8}>
                      <Card>
                      <CardBody>
                        <Button className={classes.navLink}
                        color="greenButton">Entrar</Button>
                        <Button className={classes.navLink}
                        color="greenButton">Cadastrar</Button>
                        <Button className={classes.navLink}
                        color="greenButton">Veja quem já se cadastrou!</Button>
                      </CardBody>
                      </Card>
                    </GridItem>
                  </GridContainer>
                </div>
              </GridItem>
            </GridContainer>
            
          
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                 
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                  <h2 className={classes.titleEgressos}>
                    EGRESSOS
                  </h2>

              </div>
              <GridContainer className={classes.egressosContainer}>
                {this.alunos.map(a => 
                  <GridItem xs={3} sm={3} md={3}>
                  <div className={classes.profile}>
                     <div>
                       <img src={a.photo} alt="..." className={imageClasses} />
                     </div>
                     <div className={classes.name}>
                       <h3 className={classes.egressos}>{a.name}</h3>
                       <h6 className={classes.egressosProfession}>{a.profession}</h6>
                     </div>
                   </div>
                 </GridItem>
                )}
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);
