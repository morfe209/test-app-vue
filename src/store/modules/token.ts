import axios from "axios";

const state = {
  token: localStorage.getItem("access_token") || null
};

const getters = {
  loggedIn: state => state.token !== null
};

const actions = {
  retrieveToken({ commit }, credentials) {
    return new Promise((resolve, reject) => {
      try {
        const response = {
          data: `${
            credentials.username
          }2NDIwODAwLCJodHRwOi8vdG9wdGFsLmNvbS9qd3RfY2xhaW1zL2lzX2FkbWluIjp0cnVlLCJjb21wYW55IjoiVG9wdGFsIiwiYXdlc29tZSI6dHJ1ZX0`
        };
        localStorage.setItem("access_token", response.data);
        commit("setToken", response.data);
        resolve(response.data);
      } catch (e) {
        console.log(e);
      }
    });
  },
  destroyToken(context) {
    if(context.getters.loggedIn)
    return new Promise((resolve, reject) => {
      localStorage.removeItem("access_token");
      context.commit("logout");
      resolve()
    });
  }
};

const mutations = {
  setToken: (state, token) => (state.token = token),
  logout: state => (state.token = null)
};

export default {
  state,
  getters,
  actions,
  mutations
};
