import React from "react";
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import Select from "@material-ui/core/Select";
import Switch from "@material-ui/core/Switch";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// @material-ui/icons
import Email from "@material-ui/icons/Email";
import PersonOutline from "@material-ui/icons/PersonOutline";
import People from "@material-ui/icons/People";
import Face from "@material-ui/icons/Face";
import DateRange from "@material-ui/icons/DateRange";
import Description from "@material-ui/icons/Description";
import School from "@material-ui/icons/School";
import AccountBalance from "@material-ui/icons/AccountBalance";
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";


import Navbar from "../ComponentsSempreUEA/Navbar.jsx";

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

import md5 from 'js-md5'
import Global from './../Components/global'
import image from "assets/img/register-bg.jpg";
import facebook from "assets/img/facebook-icon-input.png";
import employee from "assets/img/employee.png";
import linkedin from "assets/img/linkedin.png";
import whatsapp from "assets/img/whatsapp.png";

import { exact } from "prop-types";

import profile from "assets/img/faces/profile_default.png";


class RegisterPage extends React.Component {
  unidades = [];
  cursos = [];
  file;
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      step: 0,
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
      situation:0,
      discInstitution:"",
      discSituation:"",
      discFunction:"",
      egresInstitution:"",
      egresSituation:"",
      egresFunction:"",
      email:"",
      linkedin:"",
      unity:"",
      unityId:0,
      course:"",
      unityOptions: [],
      courseOptions: [],
      situationDiscOption: [],
      lattes: "",
      whatsapp: ""
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
        this.unidades.push(unidade);
      });
      
      this.setState({unityOptions:this.unidades});
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
          this.getCourses(this.state.unity);
        });
      }).catch((e) => {
        sessionStorage.setItem('jwtToken', '');
        alert('Houve um erro ao listar perfil, tente novamente mais tarde');
        this.props.history.push('/login');
      });
      
    }
  }

  addAluno(){
    const token = false;
    var request = {};
    var situacao_trabalhista = 0;


    if(this.state.situation == "Discente"){
      if(this.state.discSituation == "Não Trabalha"){
        situacao_trabalhista = 0;
      }else if(this.state.discSituation == "Bolsista"){
        situacao_trabalhista = 1;
      }else if(this.state.discSituation == "Estagiário"){
        situacao_trabalhista = 2;
      }else if(this.state.discSituation == "CLT"){
        situacao_trabalhista = 3;
      }else{
        situacao_trabalhista = 4;
      }
    }else{
      if(this.state.discSituation == "Não Trabalha"){
        situacao_trabalhista = 1;
      }else if(this.state.discSituation == "Bolsista"){
        situacao_trabalhista = 2;
      }else if(this.state.discSituation == "CLT"){
        situacao_trabalhista = 3;
      }else if(this.state.discSituation == "Outros"){
        situacao_trabalhista = 4;
      }
    }

    
    var body = JSON.stringify({
      "name": this.state.name,
      "email": this.state.email,
      "linkedin": this.state.linkedin,
      // "unity": this.state.unityId,
      // "course": this.state.course,
      "cpf": this.state.cpf,
      "password": md5(this.state.password),
      "facebook": this.state.facebook,
      "entryYear": parseInt(this.state.entryYear),
      "exitYear": parseInt(this.state.exitYear),
      "situation": (this.state.situation=="null" || this.state.situation=="" ? 0 : (this.state.situation == "Egresso"? 1 : 0) ),
      "discente_institutuion": this.state.discInstitution,
      "discente_situation": situacao_trabalhista,
      "discente_function": this.state.discFunction,
      "egresso_institutuion": this.state.egresInstitution,
      "egresso_situation": situacao_trabalhista,
      "egresso_function": this.state.egresFunction,
      "lattes": this.state.lattes,
      "whatsapp": this.state.whatsapp,
      // "name": "Diogo Roberto Duarte da Costa",
      // "email": "duartediogo98@gmail.com",
      // "linkedin": "linkparalinkedin.com",
      "unity": parseInt(this.state.unity),
      "course": parseInt(this.state.course)
      // "cpf": "0346666666",
      // "password": md5("justapass123"),
      // "facebook": "umlinkparaofacebook.com",
      // "entryYear": 2017,
      // "exitYear": 2021,
      // "situation": 1,
      // "discInstitution": "Ludus",
      // "discSituation": 1,
      // "discFunction": "programador",
      // "egresInstitution": "ludus",
      // "egresSituation": 1,
      // "egresFunction": "Programador",
      // "lattes": "curriculotattes.com",
      // "whatsapp": "99999-9999"
    })
    console.log(body)
    if(token) {
      request = { 
        method: 'PUT',
        headers : new Headers({
          'Content-Type':'application/json',
          'x-access-token':token,
        }),
        body: body
      }
    } else {
      request = {
        method: 'post', 
        headers : new Headers({
          'Content-Type':'application/json',
        }),
        body: body
      }
    }

    // if(this.state.name === '' || this.state.entryYear === '' || this.state.cpf === '' || this.state.password === ''
    // || this.state.course === '' || this.state.course === 'escolha' || this.state.unity === '' || this.state.unity === 'escolha') {
    //   alert('Prencha todos os valores');
    //   return;
    // }


    fetch(Global.API_URL + '/cadastro', request).then((response) => {
      if(response.ok){
        response.json().then((data) => {
            
            const form = new FormData();
            console.log(this.file);
            form.append('file', this.file);
            form.append('filename', data.id + '.png')
      
            fetch('http://localhost:5000/upload', {
              method: 'POST',
              body: form,
            }).then((response) => {
              response.json().then((body) => {
                this.setState({ imageURL: `http://localhost:5000/${body.file}` });
              });
            });
            // alert('Cadastro Realizado com Sucesso')
            // this.props.history.push('/login')
        }); 
        alert('Cadastro Realizado com Sucesso') 
        this.props.history.push('/login')
        if(token)
          this.props.history.push('/perfil')  
        else    
          this.props.history.push('/login')  
      } 
      // else {
      //   alert("CPF informado invalido, insira outro");
      // }
    }).catch((e) => {
      console.log(e);
      alert('Houve um erro ao adicionar Aluno, tente novamente mais tarde');
    });
  }

  getCourses(id){
    this.cursos = []

    fetch(Global.API_URL + '/cursos/' + id)
    .then(function(response){
      return response.json();
    })
    .then(data => {
      data.forEach(curso => {
        this.cursos.push(curso);
      });
      // this.setState({
      //   state : this.state
      // });
      console.log(this.cursos)
      this.setState({courseOptions:this.cursos});
    })
    .catch((e) => {
      alert('Houve um erro ao listar cursos desta unidade, tente novamente mais tarde');
    });
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
    console.log("situação",event.target.value);
    this.setState({ [situation]: event.target.value });
  };

  handleChangeDiscSituation = discSituation => event => {
    if(this.state.situation == 0){
      this.setState({ [discSituation]: event.target.value });
      this.setState({ egresSituation: "" });
    }else{
      this.setState({ [discSituation]: "" });
      this.setState({ egresSituation: event.target.value });
    }
    
    
  };

  handleChangeCourse = course => event => {
    console.log()
    this.setState({ [course]: event.target.value });
  };

  handleChangeUnity = unity => event => {
    this.setState({ [unity]: event.target.value });
    // const unity = 0;
    // const data = this.state.unityOptions;
    // data.forEach(unidade => {
    //   if(unidade.name == event.target.value){
    //     this.setState({unityId: parseInt(unidade.id)});
    //   }
    // });
    
    // this.setState({courseOptions: this.getCourses(event.target.value)});
    this.getCourses(event.target.value)
  };

  handleChangeTrabalho = name => event => {
    this.setState({ toggleSituationState: (this.state.toggleSituationState == "desempregado"? "trabalhando":"desempregado") });
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
    if(this.state.situation == "discente"){
      this.setState({discFunction : evt.target.value});
      this.setState({egresFunction: ""});
    }else{
      this.setState({egresFunction:evt.target.value});
      this.setState({discFunction : ""});
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

  handleChangeLattes(evt) {
    if(evt.target.id === 'lattes'){
        this.setState({
            lattes : evt.target.value
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
  handleChangeWhatsapp(evt) {
    if(evt.target.id === 'whatsapp'){
        this.setState({
            whatsapp: evt.target.value
        });
    }
  }
  fileChangedHandler = (evt) => {
    this.file = evt.target.files[0];
    let reader = new FileReader();
    reader.onload = (e) => {
      this.setState({
        imageURL: e.target.result,
      });
    };
    if(this.file){
      reader.readAsDataURL(this.file);
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
        console.log(this.state.password);
        this.addAluno()
      }
      }

  backStep(evt){
    evt.preventDefault();
    this.setState({step: this.state.step - 1});
    this.setState({textButton: "Próximo"})
  }

  toggleSituation(evt){
    evt.preventDefault();
    if(this.state.toggleSituationState == "desempregado" && evt.target.id != "btnDesempregado"){
      
      this.setState({
        toggleSituationState:"trabalhando",
        situation: "trabalhando"
      });
    }
    else if(evt.target.id != "btnTrabalhando"){
      
      this.setState({
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
  
  const optionsDisc = [
    {id:"nao_trabalha", nome:"Não Trabalha"},
    {id:"bolsista",nome: "Bolsista"},
    {id:"estagiario", nome:"Estagiário"},
    {id:"clt", nome:"CLT"},
    {id:"outros", nome:"Outros"},
  ];

  const optionsEgres = [
    {id:"nao_trabalha", nome:"Não Trabalha"},
    {id:"bolsista", nome:"Bolsista"},
    {id:"clt", nome:"CLT"},
    {id:"outros", nome:"Outros"},
  ];

  const theme = createMuiTheme({
    palette: {
      primary: { main: "#199900" }
    },
  });
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
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
                            id="password"
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
                    <GridContainer justify="center">
                      <GridItem xs={6} sm={6} md={6}>
                        <div>
                          <img src={this.state.imageURL != ""? this.state.imageURL : profile} alt="..." className={imageClasses} />
                        </div>
                      </GridItem>
                    </GridContainer>
                  
                    <div className = {classes.buttonContainerCenter}>
                          <input
                            accept="image/*"
                            className={classes.input}
                            style={{ display: 'none' }}
                            id="raised-button-file"
                            multiple
                            type="file"
                            onChange={evt => this.fileChangedHandler(evt)}
                          />
                          <label htmlFor="raised-button-file">
                            <Button variant="raised" component="span" className={classes.button}>
                              SUBIR IMAGEM
                            </Button>
                          </label>
                    </div>
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

                            <GridContainer>
                              <GridItem xs={6} sm={6} md={6}>
                                <CustomInput
                                  labelText="Ano de entrada"
                                  id="entry_year"
                                  formControlProps={{
                                    fullWidth: true
                                  }}
                                  inputProps={{
                                    onChange: ((event) => this.handleChangeEntryYear(event)),
                                    type: "text",
                                    endAdornment: (
                                      <InputAdornment position="end">
                                        <DateRange className={classes.inputIconsColor} />
                                      </InputAdornment>
                                    )
                                  }}
                                />
                                
                              </GridItem>
                              <GridItem xs={6} sm={6} md={6}>
                            
                              <CustomInput
                                  labelText="Ano de saida"
                                  id="exit_year"
                                  formControlProps={{
                                    fullWidth: true
                                  }}
                                  inputProps={{
                                    onChange: ((event) => this.handleChangeExitYear(event)),
                                    type: "text",
                                    endAdornment: (
                                      <InputAdornment position="end">
                                        <DateRange className={classes.inputIconsColor} />
                                      </InputAdornment>
                                    )
                                  }}
                                />
                                
                              </GridItem>
                          </GridContainer>
                          
                          <GridContainer>
                              <GridItem xs={6} sm={6} md={6}>
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
                              </GridItem>
                              <GridItem xs={6} sm={6} md={6}>
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
                              </GridItem>
                          </GridContainer>
                          <CustomInput
                                labelText="Whatsapp"
                                id="whatsapp"
                                formControlProps={{
                                  fullWidth: true
                                }}
                                inputProps={{
                                  onChange: ((event) => this.handleChangeWhatsapp(event)),
                                  type: "text",
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <img src={whatsapp} className={classes.inputIconsColor} />
                                    </InputAdornment>
                                  )
                                }}
                              />
            </CardBody>



let professionalData = <CardBody>
                            <GridContainer>
                              <GridItem xm={6} sm={6} md={6}>
                                <FormControl className={classes.formControl}>
                                  <InputLabel htmlFor="situation-for">Situação</InputLabel>
                                  <Select
                                    native
                                    value={this.state.situation}
                                    onChange={this.handleChangeSituation('situation')}
                                    inputProps={{
                                      name: 'situation',
                                      id: 'situation-for',
                                    }}
                                  >
                                    <option value="" />
                                    <option value={0}>Discente</option>
                                    <option value={1}>Egresso</option>
                                  
                                  </Select>
                                </FormControl>
                              </GridItem>
                              <GridItem xm={6} sm={6} md={6}>
                              <div className={classes.toggleSituation}>
                              <FormControlLabel
                                control={
                                  <MuiThemeProvider theme={theme}>
                                    <Switch
                                      checked={this.state.toggleSituationState == "desempregado"? false:true}
                                      onChange={this.handleChangeTrabalho('trabalho')}
                                      value="trabalho"
                                      color="primary"
                                      classes={{
                                        switchBase: classes.switchBase,
                                        checked: classes.switchChecked,
                                        icon: classes.switchIcon,
                                        iconChecked: classes.switchIconChecked,
                                        bar: classes.switchBar
                                      }}
                                    />
                                  </MuiThemeProvider>
                                  
                                }
                                classes={{
                                  label: classes.label
                                }}
                                label= "Trabalhando"
                              />
                              </div>
                              </GridItem>
                            </GridContainer>
                          
                          <GridContainer>
                            <GridItem xm={6} sm={6} md={6}>
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="situation-disc-for">Situação Trabalhista</InputLabel>
                                <Select
                                  native
                                  value={this.state.situation == 0? this.state.discSituation:this.state.egresSituation}
                                  onChange={this.handleChangeDiscSituation('discSituation')}
                                  inputProps={{
                                    disabled: (this.state.toggleSituationState == "trabalhando"?false:true),
                                    name: 'discSituation',
                                    id: 'situation-disc-for',
                                  }}
                                >
                                  <option value=""/>
                                  {this.state.situation == 0? this.getOptions(optionsDisc):this.getOptions(optionsEgres)}

                                </Select>
                            </FormControl>
                            </GridItem>
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
                                        <img src={employee} className={classes.inputIconsColor} />
                                      </InputAdornment>
                                    )
                                  }}
                                />
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
                                  <img src={linkedin} className={classes.inputIconsColor} />
                                </InputAdornment>
                              )
                            }}
                          />
                          <CustomInput
                            labelText="Lattes url.."
                            id="lattes"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              onChange: ((event) => this.handleChangeLattes(event)),
                              type: "text",
                              disabled: (this.state.toggleSituationState == "trabalhando"?false:true),
                              endAdornment: (
                                <InputAdornment position="end">
                                  <Description className={classes.inputIconsColor} />
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
