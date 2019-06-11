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
        <tr v-for="user in users" :key="user.id">
          <td>{{user.name}}</td>
          <td>{{user.email}}</td>
          <td>{{user["phone_number"]}}</td>

          <td>{{countries[0].name}}</td>
          <td>{{states.find(state => state.id === user["state_id"]).name}}</td>
          <td>{{cities.find(city => city.id === user["city_id"]).name}}</td>
          <td>{{new Date(user.createdAt).toDateString()}}</td>
          <td>
            <i @click="editUser(user)" class="fas fa-user-edit"></i>
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
import { mapActions } from "vuex";
export default {
  name: "UsersTable",
  props: ["users", "countries", "cities", "states"],
  methods: {
    ...mapActions([
      "deleteUser",
      "editUser"
    ])
  },
};
</script>

<style scoped>
.users {
}
</style>
