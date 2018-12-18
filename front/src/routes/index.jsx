import Components from "views/Components/Components.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import RegisterPage from "views/RegisterPage/RegisterPage.jsx";
import HomePage from "views/HomePage/HomePage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";

var indexRoutes = [
 
  // { path: "/profile-page", name: "ProfilePage", component: ProfilePage },
  { path: "/register-page", name: "RegisterPage", component: RegisterPage },
  { path: "/login", name: "LoginPage", component: LoginPage },
  { path: "/profile-page", name: "Profile", component: ProfilePage },
  { path: "/components", name: "Components", component: Components },
  { path: "/home", name: "HomePage", component: HomePage },
  { path: "/", name: "HomePage", component: HomePage },

];

export default indexRoutes;
