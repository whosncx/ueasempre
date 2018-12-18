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

import homePageStyle from "assets/jss/material-kit-react/views/homePage.jsx";

class HomePage extends React.Component {
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
                    EGRESSOS
                  </h2>

              </div>
              <GridContainer className={classes.egressosContainer}>
                <GridItem xs={6} sm={6} md={3}>
                 <div className={classes.profile}>
                    <div>
                      <img src={bb} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h4 className={classes.egressos}>Natália Cavalcante</h4>
                      <h6 className={classes.egressosProfession}>DBA</h6>
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
                <GridItem xs={6} sm={6} md={3}>
                 <div className={classes.profile}>
                    <div>
                      <img src={edson} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.egressos}>Edson Jr</h3>
                      <h6 className={classes.egressosProfession}>EMPREENDEDOR</h6>
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
                <GridItem xs={6} sm={6} md={3}>
                 <div className={classes.profile}>
                    <div>
                      <img src={evandro} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.egressos}>Evadro Filho</h3>
                      <h6 className={classes.egressosProfession}>DESENVOLVEDOR</h6>
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
                <GridItem xs={6} sm={6} md={3}>
                 <div className={classes.profile}>
                    <div>
                      <img src={francisco} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.egressos}>Francisco</h3>
                      <h6 className={classes.egressosProfession}>PROGRAMADOR</h6>
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

                <GridContainer className={classes.egressosContainer}>
                <GridItem xs={6} sm={6} md={3}>
                 <div className={classes.profile}>
                    <div>
                      <img src={wesley} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h4 className={classes.egressos}>Wesley Rocha</h4>
                      <h6 className={classes.egressosProfession}>PROGRAMADOR</h6>
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
                <GridItem xs={6} sm={6} md={3}>
                 <div className={classes.profile}>
                    <div>
                      <img src={leticia} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h4 className={classes.egressos}>Leticia Vieira</h4>
                      <h6 className={classes.egressosProfession}>DESENVOLVEDORA</h6>
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
                <GridItem xs={6} sm={6} md={3}>
                 <div className={classes.profile}>
                    <div>
                      <img src={enrique} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h4 className={classes.egressos}>Enrique Leão</h4>
                      <h6 className={classes.egressosProfession}>DESIGNER</h6>
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
                <GridItem xs={6} sm={6} md={3}>
                 <div className={classes.profile}>
                    <div>
                      <img src={queiroz} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h4 className={classes.egressos}>Gabriel de Queiroz</h4>
                      <h6 className={classes.egressosProfession}>DESENVOLVEDOR</h6>
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
              </GridContainer>7
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
