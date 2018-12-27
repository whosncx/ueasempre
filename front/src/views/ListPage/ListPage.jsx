import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import './ListPage.css';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Navbar from "../ComponentsSempreUEA/Navbar";
import Card from "components/Card/Card.jsx";

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
      fetch(Global.API_URL + '/alunos/0', request).then((response) => {
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
    return (
      <div class='bg'>
        <Navbar/>
        <br/>
        <br/>
        <br/>
        <br/>       
        <br/>    
        <br/>     
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <div className={classes.description}>
                  <h2 className={classes.titleEgressos}>
                    ALUNOS
                  </h2>
              </div>
              <GridContainer className={classes.egressosContainer}>
              {this.state.alunos.map(c => 
                <GridItem xs={6} sm={6} md={3}>
                <Card  className={classes.profile}>
                   <div>
                     <img onError={this.handleError} src={Global.API_URL + '/imgs/uploads/' + c.id + '.png?v=' + Date.now()} alt="..." className={navImageClasses} />
                   </div>
                   <div className={classes.name}>
                     <h4 className={classes.egressos}>{c.nome}</h4>
                     <h6 className={classes.egressosProfession}>{c.curso}</h6>
                   </div>
                 </Card>
               </GridItem>
              )}
              </GridContainer>
              <br/>
              <br/>
              <br/>              
            </div>       
          </div>
        </div>
        <br/>     
        </div>
    );
  }
}

export default withStyles(homePageStyle)(HomePage);
