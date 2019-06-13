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
  countryById: (state) => (id) => {
    return state.countries.find(countrie => countrie.id === id);
  }, 
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
};

const mutations = {
  setCountries: (state, countries) => (state.countries = countries),
  setCities: (state, cities) => (state.cities = cities),
  setStates: (state, states) => (state.states = states)
};

export default {
  state,
  getters,
  actions,
  mutations
};
