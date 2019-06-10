<template>
  <div id="login">
    <h2 class="login-heading text-center">Login</h2>
    <form @submit="login" class="form">
      <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
      <div v-if="serverError" class="server-error">{{ serverError }}</div>

      <div class="form-group">
        <label for="email">Username/Email</label>
        <input type="email" name="username" id="email" class="form-control" v-model="username">
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          class="form-control"
          v-model="password"
        >
      </div>

      <div class="form-group">
        <input type="submit" class="btn btn-primary btn-block" value="Login">
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Login",
  props: {
    dataSuccessMessage: {
      type: String
    }
  },
  data() {
    return {
      username: "",
      password: "",
      serverError: "",
      successMessage: this.dataSuccessMessage
    };
  },
  methods: {
    ...mapActions(["retrieveToken"]),
    login(e) {
      e.preventDefault();
      this.retrieveToken({
        username: this.username,
        password: this.password
      }).then(response => {
        this.$router.push({ name: "home" });
      });
    }
  }
};
</script>

<style scoped>
.form {
  width: 500px;
  margin: auto auto;
}
.login-heading {
  padding-top: 20px;
}
</style>