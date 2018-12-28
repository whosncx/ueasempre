import { container, title } from "assets/jss/material-kit-react.jsx";
import { primaryColor } from "assets/jss/material-kit-react.jsx";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.jsx";

const profilePageStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container
  },
  profileList: {
    color: "#3c4858",
    textAlign: "center",
    "& img": {
      maxWidth: "160px",
      width: "100%",
      marginTop: "100px",
      transform: "translate3d(0, -50%, 0)",
    },
    "&:hover,&:focus": {
      color: "white !important",
      backgroundColor: primaryColor,
      boxShadow:
        "0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)"
    },
  },
  profile: {
    color: "#3c4858",
    textAlign: "center",
    "& img": {
      maxWidth: "160px",
      width: "100%",
      marginTop: "100px",
      transform: "translate3d(0, -50%, 0)",
    },
  },
  description: {
    margin: "1.071rem auto 0",
    maxWidth: "600px",
    color: "#999",
    textAlign: "center !important"
  },
  name: {
    marginTop: "-80px"
  },
  ...imagesStyle,
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "18px",
    textDecoration: "none"
  },
  
  brandImage:{
    height: "32px"
  },
  egressos:{
    display: "inline-block",
    position: "relative",
    marginTop: "25px",
    minHeight: "16px",
    textDecoration: "none"
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999"
  },
  navWrapper: {
    margin: "20px auto 50px auto",
    textAlign: "center"
  },
  titleEgressos: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "0px",
    marginBottom: "15px",
    minHeight: "32px",
    textDecoration: "none"
  },
  egressosProfession:{
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "18px",
    color: "#FFFFFF",
    textDecoration: "none"
  },
  titleProfile: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  egressosContainer:{
    marginTop: "1px"
  }
};

export default profilePageStyle;
