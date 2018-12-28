import React from "react";

// @material-ui/core components
import { withRouter } from 'react-router';
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import Search from "@material-ui/icons/Search";
import Email from "@material-ui/icons/Email";
import Face from "@material-ui/icons/Face";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Explore from "@material-ui/icons/Explore";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Header from "components/Header/Header.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import navbarsStyle from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.jsx";

import image from "assets/img/bg.jpg";
import logo from "assets/img/logos/logo (3).svg"
import profileImage from "assets/img/faces/avatar.jpg";

class SectionNavbars extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      page : this.props.page
    }
  }
  goToRegister(){
    this.props.history.push('/register-page')
  }
  goToLogin(){
    this.props.history.push('/login')
  }
  goToList(){
    this.props.history.push('/list')
  }
  goToHome(){
    this.props.history.push('/')
  }

  render() {
  {console.log("page: ", this.state.page)}
    const { classes } = this.props;
    return (

      <div>
        <Header
              brandImage={<img onClick={this.goToHome.bind(this)} className={classes.brandImage} src={logo}></img>}
              fixed
              rightLinks={
                <List className={classes.list}>
                  <ListItem className={classes.listItem}>
                    <Button
                      onClick={this.goToHome.bind(this)}
                      className={classes.registerNavLink}
                      color={this.state.page == "home"? "primary":"transparent"}>
                      Home
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      onClick={this.goToLogin.bind(this)}
                      className={classes.registerNavLink}
                      color={this.state.page == "login"? "primary":"transparent"}>
                      Login
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      onClick={this.goToRegister.bind(this)}
                      className={classes.registerNavLink}
                      color={this.state.page == "register"? "primary":"transparent"}>
                      Cadastrar
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      onClick={this.goToList.bind(this)}
                      className={classes.registerNavLink}
                      color={this.state.page == "students"? "primary":"transparent"}>
                      Alunos
                    </Button>
                  </ListItem>
                </List>
              }
            />
      </div>
    );
  }
}

export default withRouter(withStyles(navbarsStyle)(SectionNavbars));
