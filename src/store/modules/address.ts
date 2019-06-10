import axios from "axios";

const state = {
  countries: [],
  cities: [],
  states: [],
};

const getters = {
  allCountries: state => state.countries,
  allCities: state => state.cities,
  allStates: state => state.states,
};

const actions = {
  async fetchCountries({ commit }) {
    const response = await axios.get("http://localhost:3000/countries");
    commit("setCountries", response.data);
  },
  async fetchCities({ commit }) {
    const response = await axios.get("http://localhost:3000/cities");
    commit("setCities", response.data);
  },
  async fetchStates({ commit }) {
    const response = await axios.get("http://localhost:3000/states");
    commit("setStates", response.data);
  }
  
  // async addTodo({ commit }, title) {
  //   const response = await axios.post(
  //     "https://jsonplaceholder.typicode.com/todos",
  //     { title, completed: false }
  //   );

  //   commit("newTodo", response.data);
  // },
  // async deleteTodo({ commit }, id) {
  //   await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

  //   commit("removeTodo", id);
  // },
  // async filterTodos({ commit }, e) {
  //   // Get selected number
  //   const limit = parseInt(
  //     e.target.options[e.target.options.selectedIndex].innerText
  //   );

  //   const response = await axios.get(
  //     `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
  //   );

  //   commit("setTodos", response.data);
  // },
  // async updateTodo({ commit }, updTodo) {
  //   const response = await axios.put(
  //     `https://jsonplaceholder.typicode.com/todos/${updTodo.id}`,
  //     updTodo
  //   );

  //   console.log(response.data);

  //   commit("updateTodo", response.data);
  // }
};

const mutations = {
  setCountries: (state, countries) => (state.countries = countries),
  setCities: (state, cities) => (state.cities = cities),
  setStates: (state, states) => (state.states = states),
  // newTodo: (state, todo) => state.todos.unshift(todo),
  // removeTodo: (state, id) =>
  //   (state.todos = state.todos.filter(todo => todo.id !== id)),
  // updateTodo: (state, updTodo) => {
  //   const index = state.todos.findIndex(todo => todo.id === updTodo.id);
  //   if (index !== -1) {
  //     state.todos.splice(index, 1, updTodo);
  //   }
  // }
};

export default {
  state,
  getters,
  actions,
  mutations
};
