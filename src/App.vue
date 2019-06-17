<template>
  <v-app>
    <Header/>
    <v-content class="container">
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import Header from "./components/layout/Header";

export default {
  name: "App",
  components: {
    Header
  },
  data() {
    return {
      //
    };
  },
  methods: {
    ...mapActions(["fetchCountries", "fetchStates", "fetchCities"])
  },
  created() {
    this.fetchCountries();
    this.fetchStates();
    this.fetchCities();
  }
};
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1000px;
}
</style>