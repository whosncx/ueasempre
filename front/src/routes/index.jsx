import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import HomePage from "views/HomePage/HomePage.jsx";

var indexRoutes = [
  { path: "/landing-page", name: "LandingPage", component: LandingPage },
  // { path: "/profile-page", name: "ProfilePage", component: ProfilePage },
  { path: "/login-page", name: "LoginPage", component: LoginPage },
  { path: "/components", name: "Components", component: Components },
  { path: "/home", name: "HomePage", component: HomePage },
  { path: "/", name: "HomePage", component: HomePage },
  { path: "/components", name: "Components", component: Components },

];

export default indexRoutes;
