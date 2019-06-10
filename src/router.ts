import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Login from "./components/auth/Login.vue";
import Logout from "./components/auth/Logout.vue";
import Register from "./components/auth/Register.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        requiresVisitor: true
      }
    },
    {
      path: "/register",
      name: "register",
      component: Register,
      meta: {
        requiresVisitor: true
      }
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout
    }
  ]
  // mode:'history'
});
