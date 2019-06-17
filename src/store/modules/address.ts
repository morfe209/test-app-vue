import axios from "axios";
import * as api from "../../api";

const state = {
  countries: [],
  cities: [],
  states: []
};

const getters = {
  allCountries: (state: any) => state.countries,
  allCities: (state: any) => state.cities,
  allStates: (state: any) => state.states,
  countryById: (state: any) => (id: string): any => {
    return state.countries.find(country => country.id.toString() === id);
  },
  stateById: (state: any) => (id: string): any => {
    return state.states.find(s => s.id.toString() === id);
  },
  cityById: (state: any) => (id: string): any => {
    return state.cities.find(city => city.id.toString() === id);
  },
  filterStatesById: (state: any) => (id: string): any => {
    return state.states.filter(s => s["country_id"].toString() !== id);
  },
  filterCitiesById: (state: any) => (id: string): any => {
    return state.cities.filter(city => city["state_id"].toString() === id);
  }
};

const actions = {
  async fetchCountries({ commit }) {
    const response = await axios.get(`${api.url}/countries`);
    commit("setCountries", response.data);
  },
  async fetchCities({ commit }) {
    const response = await axios.get(`${api.url}/cities`);
    commit("setCities", response.data);
  },
  async fetchStates({ commit }) {
    const response = await axios.get(`${api.url}/states`);
    commit("setStates", response.data);
  }
};

const mutations = {
  setCountries: (state: any, countries: any) => (state.countries = countries),
  setCities: (state: any, cities: any) => (state.cities = cities),
  setStates: (state: any, states: any) => (state.states = states)
};

export default {
  state,
  getters,
  actions,
  mutations
};
