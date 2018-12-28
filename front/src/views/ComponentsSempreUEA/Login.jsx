import React from "react";
import { withRouter } from 'react-router';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";
import Global from './../Components/global'
import md5 from 'js-md5'

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      cpf: '',
      password : ''
    };
  }

  handleChange(evt) {
    if(evt.target.id === 'cpf'){
        this.setState({
            cpf : evt.target.value
        });
    }else{
        this.setState({
            password : evt.target.value
        });
    }
  }

  handleSubmit(evt) {
    if(!this.state.cpf || !this.state.password){
        alert('Login required!')
    } else {
        fetch(Global.API_URL + '/login', { //local
            headers : new Headers({
                'Authorization': 'Basic '+btoa(this.state.cpf+':'+md5(this.state.password)),
            })
        })
        .then(function(response){
          return response.json();
        })
        .then(data => {
            console.log(md5(this.state.password));
            if(data.canLogin){
                    sessionStorage.setItem('jwtToken', data.token);
                    console.log(this.state.cpf)
                    this.props.history.push('/profile-page')
                } else{
                    alert('Verifique as informações e tente novamente');
                }
            })  
        .catch((e) => {
                console.log(e);
                alert('Houve um erro ao realizar o login, tente novamente mais tarde');
        });
    }     
    evt.preventDefault();
  }
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }

  goToRegister(){
    this.props.history.push('/register-page')
  }

  goToProfile(){
    this.props.history.push('/profile-page')
  }

  render() {
    const { classes } = this.props;
    return (
          <div>
            <GridContainer justify="center">
              <GridItem xs={0} sm={0} md={4}></GridItem>
              <GridItem xs={12} sm={12} md={8}>
                <Card className={classes[this.state.cardAnimaton]}>
                  <form className={classes.form}>
                    <CardHeader color="primary" className={classes.cardHeader}>
                      <h4>Login</h4>
                      
                    </CardHeader>
                    <CardBody>
                      
                      <CustomInput
                        labelText="CPF..."
                        id="cpf"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          onChange: ((event) => this.handleChange(event)),
                          type: "cpf",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Email className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Senha"
                        id="pass"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          onChange: ((event) => this.handleChange(event)),
                          type: "password",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Icon className={classes.inputIconsColor}>
                                lock_outline
                              </Icon>
                            </InputAdornment>
                          )
                        }}
                      />
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={12} className={classes.buttonsContainer}>
                          <Button onClick={this.handleSubmit.bind(this)} color="primary" size="md">
                            ENTRAR
                          </Button>
                        </GridItem>
                        <p className={classes.divider}>Ou</p>
                        <GridItem xs={12} sm={12} md={12} className={classes.buttonsContainer}>
                          <Button onClick={this.goToRegister.bind(this)} simple color="secondary" size="md">
                            FAZER CADASTRO
                          </Button>
                        </GridItem>
                      </GridContainer>
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
      </div>
    );
  }
}

export default withRouter(withStyles(loginPageStyle)(LoginPage));
