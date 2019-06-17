<template>
  <div>
    <v-toolbar flat color="white">
      <!-- <v-divider class="mx-2" inset vertical></v-divider> -->
      <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="createItem()" dark class="mb-2">New Item</v-btn>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="getAllUsers"
      :search="search"
      class="elevation-1"
      hide-actions
    >
      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
        <td>{{ props.item.email }}</td>
        <td>{{ props.item.phone }}</td>
        <td>{{ props.item.country }}</td>
        <td>{{ props.item.state }}</td>
        <td>{{ props.item.city }}</td>
        <td>{{ new Date(props.item.createdAt).toDateString() }}</td>
        <td class="justify-center layout px-0">
          <v-icon small class="mr-2" @click="editItem(props.item.id)">edit</v-icon>
          <v-icon small @click="deleteUser(props.item.id)">delete</v-icon>
        </td>
      </template>
    </v-data-table>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    search: "",
    headers: [
      {
        text: "name",
        align: "left",
        sortable: true,
        value: "name"
      },
      { text: "email", value: "email", sortable: false },
      { text: "phone", value: "phone", sortable: false },
      { text: "Country", value: "country" },
      { text: "State", value: "state" },
      { text: "City", value: "city" },
      { text: "created", value: "created" },
      { text: "", value: "actions", sortable: false }
    ]
  }),

  computed: {
    getAllUsers() {
      let users = this.$store.getters.allUsers.map(user => {
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          phone: user["phone_number"],
          country: this.$store.getters.countryById(user["country_id"]).name,
          state: this.$store.getters.stateById(user["state_id"]).name,
          city: this.$store.getters.cityById(user["city_id"]).name,
          createdAt: user.createdAt
        };
      });
      return users;
    }
  },

  watch: {},

  created() {},

  methods: {
    ...mapActions(["deleteUser"]),
    editItem(id) {
      this.$router.push({ path: `/edit/${id}` });
    },
    createItem() {
      this.$router.push({ path: "/create" });
    }
  }
};
</script>