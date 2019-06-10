<template>
  <div id="register">
    <h2 class="login-heading text-center">Create new user</h2>
    <form @submit="login" class="form">
      <div v-if="serverErrors" class="server-error">
        <div v-for="(value, key) in serverErrors" :key="key">{{ value[0] }}</div>
      </div>

      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" class="form-control" v-model="name">
        <!-- <span class="form-error">{{ errors.first('name') }}</span> -->
      </div>

      <div class="form-group">
        <label for="email">Username/Email</label>
        <input type="email" name="username" id="email" class="form-control" v-model="email">
        <!-- <span class="form-error">{{ errors.first('email') }}</span> -->
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
        <!-- <span class="form-error">{{ errors.first('password') }}</span> -->
      </div>

      <div class="form-group">
        <input type="submit" class="btn btn-primary btn-block" value="Login">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      serverErrors: "",
      successMessage: ""
    };
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