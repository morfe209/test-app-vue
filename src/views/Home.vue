<template>
  <div id="home">
    <div class="home">
      <FilterUsers/>
      <UsersTable
        v-bind:users="users"
        v-bind:cities="cities"
        v-bind:countries="countries"
        v-bind:states="states"
      />
    </div>
  </div>
</template>

<script>
import UsersTable from "../components/UsersTable";
import { mapActions } from "vuex";
import FilterUsers from "../components/FilterUsers";

export default {
  name: "Home",
  components: {
    FilterUsers,
    UsersTable
  },
  data() {
    return {
      users: this.$store.state.users.listUser,
      countries: this.$store.state.address.countries,
      cities: this.$store.state.address.cities,
      states: this.$store.state.address.states
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