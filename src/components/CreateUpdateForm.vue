<template>
  <div>
    <h1 class="header">{{ header }}</h1>
    <form class="createUserForm">
      <v-text-field
        v-model="name"
        :counter="10"
        :error-messages="nameErrors"
        label="Name"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="phone_number"
        :counter="12"
        :error-messages="phoneErrors"
        label="Phone Number"
        @input="$v['phone_number'].$touch()"
        @blur="$v['phone_number'].$touch()"
      ></v-text-field>
      <v-text-field
        v-model="email"
        :error-messages="emailErrors"
        label="E-mail"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>
      <v-text-field v-model="address" label="Address"></v-text-field>
      <v-textarea v-model="about_me" label="About me"></v-textarea>
      <!-- <v-container> -->
      <v-layout>
        <v-flex xs12 md4>
          <v-select
            v-bind:items="getCountries"
            :error-messages="countryErrors"
            v-model="country_id"
            item-text="name"
            item-value="id"
            label="Country"
            required
            @change="$v['country_id'].$touch()"
            @blur="$v['country_id'].$touch()"
          >
            <template slot="item" scope="data">
              <v-list-tile-content>
                <v-list-tile-title v-html="data.item.name"></v-list-tile-title>
              </v-list-tile-content>
            </template>
          </v-select>
        </v-flex>
        <v-flex xs12 md4>
          <v-select
            v-bind:items="getStates"
            v-model="state_id"
            :error-messages="stateErrors"
            item-text="name"
            item-value="id"
            label="States"
            :disabled="!country_id"
            required
            @change="$v['state_id'].$touch()"
            @blur="$v['state_id'].$touch()"
          >
            <template slot="item" scope="data">
              <v-list-tile-content>
                <v-list-tile-title v-html="data.item.name"></v-list-tile-title>
              </v-list-tile-content>
            </template>
          </v-select>
        </v-flex>
        <v-flex xs12 md4>
          <v-select
            v-bind:items="getCities"
            v-model="city_id"
            :error-messages="cityErrors"
            item-text="name"
            item-value="id"
            label="Cities"
            :disabled="!state_id"
            required
            @change="$v['city_id'].$touch()"
            @blur="$v['city_id'].$touch()"
          >
            <template slot="item" scope="data">
              <v-list-tile-content>
                <v-list-tile-title v-html="data.item.name"></v-list-tile-title>
              </v-list-tile-content>
            </template>
          </v-select>
        </v-flex>
      </v-layout>
      <v-btn @click="submit">submit</v-btn>
      <v-btn @click="clear">clear</v-btn>
    </form>
  </div>
</template>
<script>
import { validationMixin } from "vuelidate";
import {
  required,
  maxLength,
  email,
  numeric,
  minLength
} from "vuelidate/lib/validators";

export default {
  name: "CreateUpdateForm",
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
    phone_number: { minLength: minLength(12), numeric },
    country_id: { required },
    state_id: { required },
    city_id: { required }
  },

  data: () => ({
    header: "Create new user",
    id: null,
    name: "",
    email: "",
    phone_number: "",
    address: null,
    about_me: null,
    country_id: null,
    state_id: null,
    city_id: null
  }),

  computed: {
    getUserById() {
      return this.$store.getters.getUser(this.$route.params.id);
    },
    getCountries() {
      const countries = this.$store.getters.allCountries;
      return countries;
    },
    getStates() {
      if (!!this.country_id) {
        return this.$store.getters.filterStatesById(this.country_id);
      }
      return [];
    },
    getCities() {
      if (!!this.state_id) {
        return this.$store.getters.filterCitiesById(this.state_id);
      }
      return [];
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
    phoneErrors() {
      const errors = [];
      if (!this.$v["phone_number"].$dirty) return errors;
      !this.$v["phone_number"].numeric &&
        errors.push("Should contain only numbers");
      !this.$v["phone_number"].minLength &&
        errors.push("Phone number must be at less 7 characters long");
      return errors;
    },
    countryErrors() {
      const errors = [];
      if (!this.$v["country_id"].$dirty) return errors;
      !this.$v["country_id"].required && errors.push("Choose the country");
      return errors;
    },
    stateErrors() {
      const errors = [];
      if (!this.$v["state_id"].$dirty) return errors;
      !this.$v["state_id"].required && errors.push("Choose the state");
      return errors;
    },
    cityErrors() {
      const errors = [];
      if (!this.$v["city_id"].$dirty) return errors;
      !this.$v["city_id"].required && errors.push("Choose the city");
      return errors;
    }
  },
  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      if (this.$route.params.id) {
        const {
          id,
          name,
          email,
          phone_number,
          address,
          about_me,
          country_id,
          state_id,
          city_id
        } = this.$store.getters.getUser(this.$route.params.id);
        this.header = `edit ${name}`;
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone_number = phone_number;
        this.address = address;
        this.about_me = about_me;
        this["country_id"] = country_id;
        this["state_id"] = state_id;
        this["city_id"] = city_id;
      }
      return;
    },
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        const user = {
          id: this.id,
          name: this.name,
          email: this.email,
          phone_number: this.phone_number,
          address: this.address,
          about_me: this.about_me,
          country_id: this.country_id.toString(),
          state_id: this.state_id,
          city_id: this.city_id
        };
        !this.id
          ? this.$store.dispatch("addUser", user)
          : this.$store.dispatch("editUser", user);
        this.$router.push({ path: "/home" });
      }
      return;
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this["phone_number"] = "";
      this.address = null;
      this["about_me"] = null;
      this["country_id"] = null;
      this["state_id"] = null;
      this["city_id"] = null;
    }
  }
};
</script>
<style>
.createUserForm {
  width: 600px;
  margin: auto auto;
}
.header {
  text-align: center;
  margin: auto auto;
}
</style>
