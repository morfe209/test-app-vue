<template>
  <div id="home">
    <div class="home">
      <Table
        v-bind:users="allUsers"
        v-bind:cities="allCities"
        v-bind:countries="allCountries"
        v-bind:states="allStates"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Table from "../components/Table";

export default {
  name: "Home",
  components: {
    Table
  },
  data() {
    return {
    };
  },
  methods: {
    ...mapActions([
      "fetchUsers",
      "fetchCountries",
      "fetchStates",
      "fetchCities"
    ])
  },
  computed: mapGetters(["allUsers", "allCountries", "allCities", "allStates"]),
  created() {
    this.fetchCountries();
    this.fetchStates();
    this.fetchCities();
    this.fetchUsers();
  }
};
</script>
<style>
.home {
  width: 100%;
}
</style>