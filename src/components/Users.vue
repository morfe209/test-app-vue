<template>
  <div>
    <table class="table table-hover users">
      <thead class="thead-dark">
        <tr>
          <th>name</th>
          <th>email</th>
          <th>phone</th>
          <th>Country</th>
          <th>state</th>
          <th>city</th>
          <th>created</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in allUsers" :key="user.id">
          <td>{{user.name}}</td>
          <td>{{user.email}}</td>
          <td>{{user["phone_number"]}}</td>

          <td>{{allCountries[0].name}}</td>
          <td>{{allStates.find(state => state.id === user["state_id"]).name || ''}}</td>
          <td>{{allCities.find(city => city.id === user["city_id"]).name || ''}}</td>
          <td>{{new Date(user.createdAt).toDateString()}}</td>
          <td>
            <i @click="editTodo(user)" class="fas fa-user-edit"></i>
          </td>
          <td>
            <div>
              <i @click="deleteUser(user.id)" class="fas fa-trash-alt"></i>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Users",
  methods: {
    ...mapActions([
      "fetchUsers",
      "fetchCountries",
      "fetchStates",
      "fetchCities"
    ]),
    editTodo(user) {
      console.log(user);
    },
    deleteUser(id) {
      console.log(id);
    }
  },
  computed: mapGetters(["allUsers", "allCountries", "allCities", "allStates"]),
  created() {
    this.fetchUsers();
    this.fetchCountries();
    this.fetchStates();
    this.fetchCities();
  }
};
</script>

<style scoped>
.users {
}
</style>
