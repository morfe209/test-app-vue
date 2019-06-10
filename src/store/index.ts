import Vuex from "vuex";
import Vue from "vue";
import users from "./modules/users";
import auth from "./modules/token";
import address from "./modules/address";

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    users,
    auth,
    address
  }
});
