import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import Select from "@material-ui/core/Select";

// @material-ui/icons
import Email from "@material-ui/icons/Email";
import PersonOutline from "@material-ui/icons/PersonOutline";
import People from "@material-ui/icons/People";
import Face from "@material-ui/icons/Face";
import School from "@material-ui/icons/School";
import AccountBalance from "@material-ui/icons/AccountBalance";
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";

// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Datetime from "react-datetime";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import NavPills from "components/NavPills/NavPills.jsx";

import Navbar from "../ComponentsSempreUEA/Navbar.jsx";

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

import md5 from 'js-md5'
import Global from './../Components/global'
import image from "assets/img/register-bg.jpg";
import facebook from "assets/img/facebook-icon-input.png";
import { exact } from "prop-types";



class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      step: 0,
      colorToggleDesempregado:"primary",
      colorToggleTrabalhando:"secondary",
      toggleSituationState:"desempregado",
      textButton:"Próximo",
      cpf:"",
      password:"",
      passwordConfirmation:"",
      name:"",
      facebook:"",
      imageURL:"",
      entryYear:"",
      exitYear:"",
      situation:"",
      discInstitution:"",
      discSituation:"",
      discFunction:"",
      egresInstitution:"",
      egresSituation:"",
      egresFunction:"",
      email:"",
      linkedin:"",
      unity:"",
      course:"",
      unityOptions: [],
      courseOptions: [],
      situationDiscOption: [],
    };
  }
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
    const token = sessionStorage.getItem('jwtToken');
    
    fetch(Global.API_URL + '/unidades')
    .then(function(response){
      return response.json();
    })
    .then(data => {
      data.forEach(unidade => {
        this.unityOptions.push({value:''+unidade.id, label:unidade.nome});
      });
    })
    .catch((e) => {
      console.log(e);
      alert('Houve um erro ao pegar unidades, tente novamente mais tarde');
    });

    if(!token){
      // this.props.history.push('/login');
      return 
    } else {
      fetch(Global.API_URL + '/perfilaluno', {
        headers : new Headers({
          'x-access-token': token
        })
      }).then((response) => {
        if(response.status === 401){
          sessionStorage.setItem('jwtToken','');
          this.props.history.push('/login');
        }
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
          this.showCursos(this.state.unity);
        });
      }).catch((e) => {
        sessionStorage.setItem('jwtToken', '');
        alert('Houve um erro ao listar perfil, tente novamente mais tarde');
        this.props.history.push('/login');
      });
      
    }
  }

  getCourses(id){
    
    const options = [
      {id:"eng_computer", name:"Engenharia da Computação"},
      {id:"eng_civil", name:"Engenharia Civil"},
      {id:"metereologia", name:"Metereologia"},
      {id:"si", name:"Sistema de Informação"}
    ];
    return options;
  }

  handleChangeCPF(evt) {
    if(evt.target.id === 'cpf'){
        this.setState({
            cpf : evt.target.value
        });
    }
  }
  handleChangePassword(evt) {
    if(evt.target.id === 'password'){
        this.setState({
            password : evt.target.value
        });
    }
  }
  handleChangePasswordConfirm(evt) {
    if(evt.target.id === 'password_confirmation'){
        this.setState({
            passwordConfirmation : evt.target.value
        });
    }
  }
  handleChangeEntryYear(evt) {
    if(evt.target.id === 'entry_year'){
        this.setState({
            entryYear : evt.target.value
        });
    }
  }
  handleChangeExitYear(evt) {
    if(evt.target.id === 'exit_year'){
        this.setState({
            exitYear : evt.target.value
        });
    }
  }

  handleChangeSituation = situation => event => {
    this.setState({ [situation]: event.target.value });
  };

  handleChangeDiscSituation = discSituation => event => {
    this.setState({ [discSituation]: event.target.value });
  };

  handleChangeCourse = course => event => {
    this.setState({ [course]: event.target.value });
  };

  handleChangeUnity = unity => event => {
    this.setState({ [unity]: event.target.value });
    this.setState({courseOptions: this.getCourses("id")});
  };

  // handleChangeSituation(evt) {
  //   if(evt.target.id === 'situation'){
  //       this.setState({
  //           situation : evt.target.value
  //       });
  //   }
  // }
  handleChangeDiscInstitution(evt) {
    if(evt.target.id === 'disc_institution'){
        this.setState({
            discInstitution : evt.target.value
        });
    }
  }
  handleChangeDiscFunction(evt) {
    if(evt.target.id === 'function'){
        this.setState({
            discFunction : evt.target.value
        });
    }
  }
  // handleChangeDiscSituation(evt) {
  //   if(evt.target.id === 'disc_situation'){
  //       this.setState({
  //           discSituation : evt.target.value
  //       });
  //   }
  // }
  handleChangeName(evt) {
    if(evt.target.id === 'name'){
        this.setState({
            name : evt.target.value
        });
    }
  }
  handleChangeEmail(evt) {
    if(evt.target.id === 'email'){
        this.setState({
            email : evt.target.value
        });
    }
  }
  handleChangeLinkedin(evt) {
    if(evt.target.id === 'linkedin'){
        this.setState({
            linkedin : evt.target.value
        });
    }
  }

  handleChangeFacebook(evt) {
    if(evt.target.id === 'facebook'){
        this.setState({
            facebook : evt.target.value
        });
    }
  }
  handleChangeImageURL(evt) {
    if(evt.target.id === 'image_url'){
        this.setState({
            cpf : evt.target.value
        });
    }
  }
  
  nextStep(evt){
      evt.preventDefault();
      if(this.state.step != 2){
        if(this.state.step == 1){
          this.setState({textButton: "Enviar"})
        }else{
          this.setState({textButton: "Próximo"})
        }
        this.setState({step: (this.state.step + 1)%3 });
      }else{
        alert(this.state.cpf);
      }
      }

  backStep(evt){
    evt.preventDefault();
    this.setState({step: this.state.step - 1});
    this.setState({textButton: "Próximo"})
  }

  toggleSituation(evt){
    evt.preventDefault();
    if(this.state.toggleSituationState == "desempregado"){
      this.setState({
        colorToggleDesempregado:"secondary",
        colorToggleTrabalhando:"primary",
        toggleSituationState:"trabalhando",
        situation: "trabalhando"
      });
    }
    else{
      this.setState({
        colorToggleDesempregado:"primary",
        colorToggleTrabalhando:"secondary",
        toggleSituationState:"desempregado",
        situation: "desempregado"
      });
    }
  }

  getOptions(options){
    const list =  options.map((option) =>
      <option value={option.id}>{option.nome}</option>
    )
    return list;
  }

  render() {
  const { classes, ...rest } = this.props;
  const cardTitles = ["Dados de Autenticação", "Dados Pessoais", "Dados Profissionais"];
  

let authData = <CardBody>
                        <CustomInput
                            labelText="CPF"
                            id="cpf"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              onChange: ((event) => this.handleChangeCPF(event)),
                              type: "text",
                              endAdornment: (
                                <InputAdornment position="end">
                                  <PersonOutline className={classes.inputIconsColor} />
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
                              onChange: ((event) => this.handleChangePassword(event)),
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
                          
                          <CustomInput
                            labelText="Confirmar senha.."
                            id="password_confirmation"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              onChange: ((event) => this.handleChangePasswordConfirm(event)),
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

                          <CustomInput
                            labelText="Nome Completo..."
                            id="name"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              onChange: ((event) => this.handleChangeName(event)),
                              type: "text",
                              endAdornment: (
                                <InputAdornment position="end">
                                  <People className={classes.inputIconsColor} />
                                </InputAdornment>
                              )
                            }}
                          />
                          <CustomInput
                            labelText="Email..."
                            id="email"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              onChange: ((event) => this.handleChangeEmail(event)),
                              type: "email",
                              endAdornment: (
                                <InputAdornment position="end">
                                  <Email className={classes.inputIconsColor} />
                                </InputAdornment>
                              )
                            }}
                          />
                        
                      </CardBody>



let personalData = <CardBody>
<CustomInput
                  labelText="Facebook url..."
                            id="facebook"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              onChange: ((event) => this.handleChangeFacebook(event)),
                              type: "text",
                              endAdornment: (
                                <InputAdornment position="end">
                                  <img src={facebook} className={classes.inputIconsColor}></img>
                                  {/* <PersonOutline className={classes.inputIconsColor} /> */}
                                </InputAdornment>
                              )
                            }}
                          />
                          <CustomInput
                            labelText="Foto url..."
                            id="image_url"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              onChange: ((event) => this.handleChangeImageURL(event)),
                              type: "text",
                              endAdornment: (
                                <InputAdornment position="end">
                                  <Face className={classes.inputIconsColor} />
                                </InputAdornment>
                              )
                            }}
                          />

                            <GridContainer>
                              <GridItem xs={6} sm={6} md={6}>
                                <FormControl fullWidth>
                                  <Datetime
                                    id="entry_year"
                                    locale="br"
                                    inputProps={{
                                      onChange: ((event) => this.handleChangeEntryYear(event)),
                                      placeholder: "Data de entrada" 
                                    }}
                                  />
                                </FormControl>
                              </GridItem>
                              <GridItem xs={6} sm={6} md={6}>
                            
                                <FormControl fullWidth>
                                  <Datetime
                                    id="exit_year"
                                    locale="br"
                                    inputProps={{
                                      onChange: ((event) => this.handleChangeExitYear(event)),
                                      placeholder: "Data de saida"
                                    }}
                                  />
                                </FormControl>
                              </GridItem>
                          </GridContainer>
                        
                          <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="unity-for">Unidade</InputLabel>
                            <Select
                              native
                              value={this.state.unity}
                              onChange={this.handleChangeUnity('unity')}
                              inputProps={{
                                name: 'unity',
                                id: 'unity-for',
                              }}
                            >
                              <option value="" />
                              {this.state.unityOptions.length > 0? this.getOptions(this.state.unityOptions) : ""}
                            
                            </Select>
                          </FormControl>
                          
                          <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="course-for">Curso</InputLabel>
                            <Select
                              native
                              value={this.state.course}
                              onChange={this.handleChangeCourse('course')}
                              inputProps={{
                                name: 'course',
                                id: 'course-for',
                              }}
                            >
                              <option value="" />
                              {this.state.courseOptions.length > 0? this.getOptions(this.state.courseOptions) : ""}
                            
                            </Select>
                          </FormControl>
    
            </CardBody>



let professionalData = <CardBody>
                            <GridContainer>
                              <GridItem xm={6} sm={6} md={6}>
                                <Button
                                  onClick={this.toggleSituation.bind(this)}
                                  color={this.state.colorToggleDesempregado}
                                  className={this.state.toggleSituationState=="desempregado"?classes.active:classes.inactive}>
                                    Desempregado
                                </Button>
                              </GridItem>
                              <GridItem xm={6} sm={6} md={6}>
                                <Button
                                  onClick={this.toggleSituation.bind(this)}
                                  color={this.state.colorToggleTrabalhando}
                                  className={this.state.toggleSituationState=="trabalhando"?classes.active:classes.inactive}>
                                    Trabalhando
                                </Button>
                              </GridItem>
                            </GridContainer>
                          
                          <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="situation-for">Situação</InputLabel>
                            <Select
                              native
                              value={this.state.situation}
                              onChange={this.handleChangeSituation('situation')}
                              inputProps={{
                                disabled: (this.state.toggleSituationState == "trabalhando"?false:true),
                                name: 'situation',
                                id: 'situation-for',
                              }}
                            >
                              <option value="" />
                              <option value={1}>Discente</option>
                              <option value={2}>Egresso</option>
                            
                            </Select>
                          </FormControl>
                          <GridContainer>
                            <GridItem xm={6} sm={6} md={6}>
                              <CustomInput
                                labelText="Cargo"
                                id="disc_function"
                                formControlProps={{
                                  fullWidth: true
                                }}
                                inputProps={{
                                  onChange: ((event) => this.handleChangeDiscFunction(event)),
                                  type: "text",
                                  disabled: (this.state.toggleSituationState == "trabalhando"?false:true),
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <People className={classes.inputIconsColor} />
                                    </InputAdornment>
                                  )
                                }}
                              />
                            </GridItem>
                            <GridItem xm={6} sm={6} md={6}>
                              <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="situation-disc-for">Situação Trabalhista</InputLabel>
                                <Select
                                  native
                                  value={this.state.discSituation}
                                  onChange={this.handleChangeDiscSituation('discSituation')}
                                  inputProps={{
                                    disabled: (this.state.toggleSituationState == "trabalhando"?false:true),
                                    name: 'discSituation',
                                    id: 'situation-disc-for',
                                  }}
                                >
                                  <option value="" />
                                  <option value={"bolsista"}>Bolsista</option>
                                  <option value={"estagiario"}>Estagiário</option>
                                  <option value={"clt"}>Empregado CLT</option>
                                  <option value={"outros"}>Outros</option>

                                </Select>
                              </FormControl>
                            </GridItem>
                          </GridContainer>
                          
                          <CustomInput
                            labelText="Linkedin"
                            id="linkedin"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              onChange: ((event) => this.handleChangeLinkedin(event)),
                              type: "text",
                              disabled: (this.state.toggleSituationState == "trabalhando"?false:true),
                              endAdornment: (
                                <InputAdornment position="end">
                                  <People className={classes.inputIconsColor} />
                                </InputAdornment>
                              )
                            }}
                          />
                        </CardBody>

    return (
      <div>
        <Navbar/>
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
          <GridContainer justify="center">
              
              <GridItem xs={12} sm={12} md={5}>
                <Card className={classes[this.state.cardAnimaton]}>
                  
                  <form className={classes.form}>
                    <CardHeader color="primary" className={classes.cardHeader}>
                      <h4>{cardTitles[this.state.step]}</h4>
                    </CardHeader>
                    {this.state.step == 0? authData : ""}
                    {this.state.step == 1? personalData : ""}
                    {this.state.step == 2? professionalData: ""}

                    <CardFooter className={classes.cardFooter}>
                    <Button disabled={this.state.step == 0? true:false} onClick={this.backStep.bind(this)} color="secondary" size="md">
                        voltar
                      </Button>
                      <Button onClick={this.nextStep.bind(this)} color="primary" size="md">
                        {this.state.textButton}
                      </Button> 
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
              </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(RegisterPage);
