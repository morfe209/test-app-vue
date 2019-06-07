<template>
  <div class="page-wrapper login-form">
    <h2 class="login-heading">Login</h2>
    <form @submit="login">
      <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
      <div v-if="serverError" class="server-error">{{ serverError }}</div>

      <div class="form-control">
        <label for="email">Username/Email</label>
        <input type="email" name="username" id="email" class="login-input" v-model="username">
      </div>

      <div class="form-control">
        <label for="password">Password</label>
        <input type="password" name="password" id="password" class="login-input" v-model="password">
      </div>

      <div class="form-control">
        <input type="submit" class="btn-submit" value="Login">
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
label {
  display: block;
  margin-bottom: 4px;
}
.login-heading {
  margin-bottom: 16px;
}
.form-control {
  margin-bottom: 24px;
}

.login-form {
  max-width: 400px;
  margin: auto;
}
.login-input {
  width: 100%;
  font-size: 16px;
  padding: 12px 16px;
  border-radius: 3px;
  border: 1px solid lightgrey;
}
.btn-submit {
  width: 100%;
  padding: 14px 12px;
  font-size: 18px;
  font-weight: bold;
  background: #60bd4f;
  color: white;
  /* border-radius: 3px; */
  cursor: pointer;
}
.server-error {
  margin-bottom: 12px;
  font-size: 16px;
  padding: 10px 16px;
  color: #a94442;
  background: #f3dede;
  border-radius: 4px;
}
.success-message {
  background-color: #dff0d8;
  color: #3c763d;
  margin-bottom: 12px;
  font-size: 16px;
  padding: 10px 16px;
  border-radius: 4px;
}
.form-error {
  font-size: 16px;
  color: #a94442;
}
.input-error {
  border: 1px solid red;
}
</style>