import React from "react";
import MediaQuery from 'react-responsive';
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
          alert('Houve um erro ao listar Alunos, tente novamente mais tarde');
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
    //const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    
    let list = <div>
            <div className={classes.container}>

              <div className={classes.description}>
                  <h2 className={classes.titleEgressos}>
                  ALUNOS E EGRESSOS
                  </h2>

              </div>
              <GridContainer justify="center">

              {this.state.alunos.map(c => 
                <GridItem xs={12} sm={6} md={3}>
                <Card className={classes.profile}>
                   <CardBody onClick={() => this.props.history.push('profile-page/'+c.id)}>
                     
                    <GridContainer>
                      <GridItem xs={3} sm={12} md={12} className={classes.gridImage}>
                          <img onError={this.handleError} src={Global.API_URL + '/imgs/uploads/' + c.id + '.png?v=' + Date.now()} alt="..." className={classes.navImageClasses} />
                      </GridItem>
                      <GridItem xs={9} sm={12} md={12} className={classes.gridText}>
                        <div className={classes.name}>
                          <h6 className={classes.egressos}>{c.nome}</h6>
                          <p className={classes.egressosProfession}>{c.curso}</p>
                          <a href={c.linkedin}  justIcon link target="blank">
                            <img className={classes.linkedinIcon} src={'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzODIgMzgyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzODIgMzgyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPHBhdGggc3R5bGU9ImZpbGw6IzAwNzdCNzsiIGQ9Ik0zNDcuNDQ1LDBIMzQuNTU1QzE1LjQ3MSwwLDAsMTUuNDcxLDAsMzQuNTU1djMxMi44ODlDMCwzNjYuNTI5LDE1LjQ3MSwzODIsMzQuNTU1LDM4MmgzMTIuODg5ICBDMzY2LjUyOSwzODIsMzgyLDM2Ni41MjksMzgyLDM0Ny40NDRWMzQuNTU1QzM4MiwxNS40NzEsMzY2LjUyOSwwLDM0Ny40NDUsMHogTTExOC4yMDcsMzI5Ljg0NGMwLDUuNTU0LTQuNTAyLDEwLjA1Ni0xMC4wNTYsMTAuMDU2ICBINjUuMzQ1Yy01LjU1NCwwLTEwLjA1Ni00LjUwMi0xMC4wNTYtMTAuMDU2VjE1MC40MDNjMC01LjU1NCw0LjUwMi0xMC4wNTYsMTAuMDU2LTEwLjA1Nmg0Mi44MDYgIGM1LjU1NCwwLDEwLjA1Niw0LjUwMiwxMC4wNTYsMTAuMDU2VjMyOS44NDR6IE04Ni43NDgsMTIzLjQzMmMtMjIuNDU5LDAtNDAuNjY2LTE4LjIwNy00MC42NjYtNDAuNjY2UzY0LjI4OSw0Mi4xLDg2Ljc0OCw0Mi4xICBzNDAuNjY2LDE4LjIwNyw0MC42NjYsNDAuNjY2UzEwOS4yMDgsMTIzLjQzMiw4Ni43NDgsMTIzLjQzMnogTTM0MS45MSwzMzAuNjU0YzAsNS4xMDYtNC4xNCw5LjI0Ni05LjI0Niw5LjI0NkgyODYuNzMgIGMtNS4xMDYsMC05LjI0Ni00LjE0LTkuMjQ2LTkuMjQ2di04NC4xNjhjMC0xMi41NTYsMy42ODMtNTUuMDIxLTMyLjgxMy01NS4wMjFjLTI4LjMwOSwwLTM0LjA1MSwyOS4wNjYtMzUuMjA0LDQyLjExdjk3LjA3OSAgYzAsNS4xMDYtNC4xMzksOS4yNDYtOS4yNDYsOS4yNDZoLTQ0LjQyNmMtNS4xMDYsMC05LjI0Ni00LjE0LTkuMjQ2LTkuMjQ2VjE0OS41OTNjMC01LjEwNiw0LjE0LTkuMjQ2LDkuMjQ2LTkuMjQ2aDQ0LjQyNiAgYzUuMTA2LDAsOS4yNDYsNC4xNCw5LjI0Niw5LjI0NnYxNS42NTVjMTAuNDk3LTE1Ljc1MywyNi4wOTctMjcuOTEyLDU5LjMxMi0yNy45MTJjNzMuNTUyLDAsNzMuMTMxLDY4LjcxNiw3My4xMzEsMTA2LjQ3MiAgTDM0MS45MSwzMzAuNjU0TDM0MS45MSwzMzAuNjU0eiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K'}/>
                          </a>
                          <a href={c.facebook} justIcon link target="blank">
                            <img className={classes.facebookIcon} src={'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0MDguNzg4IDQwOC43ODgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwOC43ODggNDA4Ljc4ODsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiPgo8cGF0aCBzdHlsZT0iZmlsbDojNDc1OTkzOyIgZD0iTTM1My43MDEsMEg1NS4wODdDMjQuNjY1LDAsMC4wMDIsMjQuNjYyLDAuMDAyLDU1LjA4NXYyOTguNjE2YzAsMzAuNDIzLDI0LjY2Miw1NS4wODUsNTUuMDg1LDU1LjA4NSAgaDE0Ny4yNzVsMC4yNTEtMTQ2LjA3OGgtMzcuOTUxYy00LjkzMiwwLTguOTM1LTMuOTg4LTguOTU0LTguOTJsLTAuMTgyLTQ3LjA4N2MtMC4wMTktNC45NTksMy45OTYtOC45ODksOC45NTUtOC45ODloMzcuODgyICB2LTQ1LjQ5OGMwLTUyLjgsMzIuMjQ3LTgxLjU1LDc5LjM0OC04MS41NWgzOC42NWM0Ljk0NSwwLDguOTU1LDQuMDA5LDguOTU1LDguOTU1djM5LjcwNGMwLDQuOTQ0LTQuMDA3LDguOTUyLTguOTUsOC45NTUgIGwtMjMuNzE5LDAuMDExYy0yNS42MTUsMC0zMC41NzUsMTIuMTcyLTMwLjU3NSwzMC4wMzV2MzkuMzg5aDU2LjI4NWM1LjM2MywwLDkuNTI0LDQuNjgzLDguODkyLDEwLjAwOWwtNS41ODEsNDcuMDg3ICBjLTAuNTM0LDQuNTA2LTQuMzU1LDcuOTAxLTguODkyLDcuOTAxaC01MC40NTNsLTAuMjUxLDE0Ni4wNzhoODcuNjMxYzMwLjQyMiwwLDU1LjA4NC0yNC42NjIsNTUuMDg0LTU1LjA4NFY1NS4wODUgIEM0MDguNzg2LDI0LjY2MiwzODQuMTI0LDAsMzUzLjcwMSwweiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K'}/>
                          </a>
                        </div>
                      </GridItem>
                   </GridContainer>
                   </CardBody>
                 </Card>
               </GridItem>
              )}
              </GridContainer>
              <br/>
              <br/>
              <br/>

              
            </div>
          </div>

          let listSmall = <div>
          <div className={classes.container}>

            <div className={classes.description}>
                <h2 className={classes.titleEgressos}>
                ALUNOS E EGRESSOS
                </h2>

            </div>
            <GridContainer justify="center">

            {this.state.alunos.map(c => 
              <GridItem xs={12} sm={6} md={3}>
              <Card className={classes.profileSmall}>
                <CardBody>
                  <GridContainer>
                  {/* <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0MDguNzg4IDQwOC43ODgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwOC43ODggNDA4Ljc4ODsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiPgo8cGF0aCBzdHlsZT0iZmlsbDojNDc1OTkzOyIgZD0iTTM1My43MDEsMEg1NS4wODdDMjQuNjY1LDAsMC4wMDIsMjQuNjYyLDAuMDAyLDU1LjA4NXYyOTguNjE2YzAsMzAuNDIzLDI0LjY2Miw1NS4wODUsNTUuMDg1LDU1LjA4NSAgaDE0Ny4yNzVsMC4yNTEtMTQ2LjA3OGgtMzcuOTUxYy00LjkzMiwwLTguOTM1LTMuOTg4LTguOTU0LTguOTJsLTAuMTgyLTQ3LjA4N2MtMC4wMTktNC45NTksMy45OTYtOC45ODksOC45NTUtOC45ODloMzcuODgyICB2LTQ1LjQ5OGMwLTUyLjgsMzIuMjQ3LTgxLjU1LDc5LjM0OC04MS41NWgzOC42NWM0Ljk0NSwwLDguOTU1LDQuMDA5LDguOTU1LDguOTU1djM5LjcwNGMwLDQuOTQ0LTQuMDA3LDguOTUyLTguOTUsOC45NTUgIGwtMjMuNzE5LDAuMDExYy0yNS42MTUsMC0zMC41NzUsMTIuMTcyLTMwLjU3NSwzMC4wMzV2MzkuMzg5aDU2LjI4NWM1LjM2MywwLDkuNTI0LDQuNjgzLDguODkyLDEwLjAwOWwtNS41ODEsNDcuMDg3ICBjLTAuNTM0LDQuNTA2LTQuMzU1LDcuOTAxLTguODkyLDcuOTAxaC01MC40NTNsLTAuMjUxLDE0Ni4wNzhoODcuNjMxYzMwLjQyMiwwLDU1LjA4NC0yNC42NjIsNTUuMDg0LTU1LjA4NFY1NS4wODUgIEM0MDguNzg2LDI0LjY2MiwzODQuMTI0LDAsMzUzLjcwMSwweiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" /> */}
                    <GridItem xs={3} sm={12} md={12} className={classes.gridImage}>
                        <img onError={this.handleError} src={Global.API_URL + '/imgs/uploads/' + c.id + '.png?v=' + Date.now()} alt="..." className={classes.navImageClassesSmall} />
                    </GridItem>
                    <GridItem xs={9} sm={12} md={12} className={classes.gridText}>
                      <div className={classes.name}>
                        <h6 className={classes.egressosSmall}>{c.nome}</h6>
                        <p className={classes.egressosProfessionSmall}>{c.curso}</p>
                        <div className={classes.buttonsContainer}>
                          <a href={c.linkedin}  justIcon link target="blank">
                            <img className={classes.linkedinIcon} src={'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzODIgMzgyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzODIgMzgyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPHBhdGggc3R5bGU9ImZpbGw6IzAwNzdCNzsiIGQ9Ik0zNDcuNDQ1LDBIMzQuNTU1QzE1LjQ3MSwwLDAsMTUuNDcxLDAsMzQuNTU1djMxMi44ODlDMCwzNjYuNTI5LDE1LjQ3MSwzODIsMzQuNTU1LDM4MmgzMTIuODg5ICBDMzY2LjUyOSwzODIsMzgyLDM2Ni41MjksMzgyLDM0Ny40NDRWMzQuNTU1QzM4MiwxNS40NzEsMzY2LjUyOSwwLDM0Ny40NDUsMHogTTExOC4yMDcsMzI5Ljg0NGMwLDUuNTU0LTQuNTAyLDEwLjA1Ni0xMC4wNTYsMTAuMDU2ICBINjUuMzQ1Yy01LjU1NCwwLTEwLjA1Ni00LjUwMi0xMC4wNTYtMTAuMDU2VjE1MC40MDNjMC01LjU1NCw0LjUwMi0xMC4wNTYsMTAuMDU2LTEwLjA1Nmg0Mi44MDYgIGM1LjU1NCwwLDEwLjA1Niw0LjUwMiwxMC4wNTYsMTAuMDU2VjMyOS44NDR6IE04Ni43NDgsMTIzLjQzMmMtMjIuNDU5LDAtNDAuNjY2LTE4LjIwNy00MC42NjYtNDAuNjY2UzY0LjI4OSw0Mi4xLDg2Ljc0OCw0Mi4xICBzNDAuNjY2LDE4LjIwNyw0MC42NjYsNDAuNjY2UzEwOS4yMDgsMTIzLjQzMiw4Ni43NDgsMTIzLjQzMnogTTM0MS45MSwzMzAuNjU0YzAsNS4xMDYtNC4xNCw5LjI0Ni05LjI0Niw5LjI0NkgyODYuNzMgIGMtNS4xMDYsMC05LjI0Ni00LjE0LTkuMjQ2LTkuMjQ2di04NC4xNjhjMC0xMi41NTYsMy42ODMtNTUuMDIxLTMyLjgxMy01NS4wMjFjLTI4LjMwOSwwLTM0LjA1MSwyOS4wNjYtMzUuMjA0LDQyLjExdjk3LjA3OSAgYzAsNS4xMDYtNC4xMzksOS4yNDYtOS4yNDYsOS4yNDZoLTQ0LjQyNmMtNS4xMDYsMC05LjI0Ni00LjE0LTkuMjQ2LTkuMjQ2VjE0OS41OTNjMC01LjEwNiw0LjE0LTkuMjQ2LDkuMjQ2LTkuMjQ2aDQ0LjQyNiAgYzUuMTA2LDAsOS4yNDYsNC4xNCw5LjI0Niw5LjI0NnYxNS42NTVjMTAuNDk3LTE1Ljc1MywyNi4wOTctMjcuOTEyLDU5LjMxMi0yNy45MTJjNzMuNTUyLDAsNzMuMTMxLDY4LjcxNiw3My4xMzEsMTA2LjQ3MiAgTDM0MS45MSwzMzAuNjU0TDM0MS45MSwzMzAuNjU0eiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K'}/>
                          </a>
                          <a href={c.facebook} justIcon link target="blank">
                            <img className={classes.facebookIcon} src={'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0MDguNzg4IDQwOC43ODgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwOC43ODggNDA4Ljc4ODsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiPgo8cGF0aCBzdHlsZT0iZmlsbDojNDc1OTkzOyIgZD0iTTM1My43MDEsMEg1NS4wODdDMjQuNjY1LDAsMC4wMDIsMjQuNjYyLDAuMDAyLDU1LjA4NXYyOTguNjE2YzAsMzAuNDIzLDI0LjY2Miw1NS4wODUsNTUuMDg1LDU1LjA4NSAgaDE0Ny4yNzVsMC4yNTEtMTQ2LjA3OGgtMzcuOTUxYy00LjkzMiwwLTguOTM1LTMuOTg4LTguOTU0LTguOTJsLTAuMTgyLTQ3LjA4N2MtMC4wMTktNC45NTksMy45OTYtOC45ODksOC45NTUtOC45ODloMzcuODgyICB2LTQ1LjQ5OGMwLTUyLjgsMzIuMjQ3LTgxLjU1LDc5LjM0OC04MS41NWgzOC42NWM0Ljk0NSwwLDguOTU1LDQuMDA5LDguOTU1LDguOTU1djM5LjcwNGMwLDQuOTQ0LTQuMDA3LDguOTUyLTguOTUsOC45NTUgIGwtMjMuNzE5LDAuMDExYy0yNS42MTUsMC0zMC41NzUsMTIuMTcyLTMwLjU3NSwzMC4wMzV2MzkuMzg5aDU2LjI4NWM1LjM2MywwLDkuNTI0LDQuNjgzLDguODkyLDEwLjAwOWwtNS41ODEsNDcuMDg3ICBjLTAuNTM0LDQuNTA2LTQuMzU1LDcuOTAxLTguODkyLDcuOTAxaC01MC40NTNsLTAuMjUxLDE0Ni4wNzhoODcuNjMxYzMwLjQyMiwwLDU1LjA4NC0yNC42NjIsNTUuMDg0LTU1LjA4NFY1NS4wODUgIEM0MDguNzg2LDI0LjY2MiwzODQuMTI0LDAsMzUzLjcwMSwweiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K'}/>
                          </a>
                        </div>
                      </div>
                    </GridItem>
                </GridContainer>
                </CardBody>
              </Card>
            </GridItem>
            )}
            </GridContainer>
            <br/>
            <br/>
            <br/>
          </div>
          </div>
    
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
        
        
        <MediaQuery query="(min-device-width: 600px)">
          <div className={classNames(classes.main, classes.mainRaised)}>
              {list}
          </div>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 600px)">
          {listSmall}
        </MediaQuery>
        <Footer/>
      </div>
    );
  }
}

export default withStyles(homePageStyle)(HomePage);
