import Components from "views/Components/Components.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import RegisterPage from "views/RegisterPage/RegisterPage.jsx";
import HomePage from "views/HomePage/HomePage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import ListPage from "views/ListPage/ListPage.jsx";

var indexRoutes = [
 
  // { path: "/profile-page", name: "ProfilePage", component: ProfilePage },
  { path: "/register-page", name: "RegisterPage", component: RegisterPage },
  { path: "/login", name: "LoginPage", component: LoginPage },
  { path: "/profile-page/:aluno", name: "Profile", component: ProfilePage },
  { path: "/profile-page", name: "Profile", component: ProfilePage },
  // { path: "/components", name: "Components", component: Components },
  { path: "/home", name: "HomePage", component: HomePage },
  { path: "/list", name: "ListPage", component: ListPage },
  { path: "/", name: "HomePage", component: HomePage },

];

export default indexRoutes;
