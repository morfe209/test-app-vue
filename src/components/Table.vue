<template>
  <div>
    <v-toolbar flat color="white">
      <!-- <v-divider class="mx-2" inset vertical></v-divider> -->
      <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
      <v-spacer></v-spacer>
      <v-btn color="primary" dark class="mb-2">New Item</v-btn>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="users"
      :search="search"
      class="elevation-1"
      hide-actions
    >
      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
        <td>{{ props.item.email }}</td>
        <td>{{ props.item["phone_number"] }}</td>
        <td>{{ getCountry(props.item["country_id"]) }}</td>
        <td>{{ states.find(state => state.id === props.item["state_id"]).name }}</td>
        <td>{{ cities.find(city => city.id === props.item["city_id"]).name }}</td>
        <td>{{ new Date(props.item.createdAt).toDateString() }}</td>
        <td class="justify-center layout px-0">
          <v-icon small class="mr-2" @click="editItem(props.item)">edit</v-icon>
          <v-icon small @click="deleteItem(props.item)">delete</v-icon>
        </td>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  props: ["users", "countries", "cities", "states"],
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

  // computed: {},

  watch: {},

  created() {},

  methods: {
    ...mapGetters(["countryById", "citiesById", "statesById"]),
    getCountry(id) {
      console.log(id)
      return this.countryById(id).name
    }
  }
};
</script>