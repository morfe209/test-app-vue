<template>
  <div class="login-form">
    <h2 class="login-heading">Create new user</h2>
    <form>
      <div v-if="serverErrors" class="server-error">
        <div v-for="(value, key) in serverErrors" :key="key">
          {{ value[0] }}
        </div>

      </div>

      <div class="form-control">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" class="login-input" v-model="name">
        <!-- <span class="form-error">{{ errors.first('name') }}</span> -->
      </div>

      <div class="form-control">
        <label for="email">Username/Email</label>
        <input type="email" name="username" id="email" class="login-input" v-model="email">
        <!-- <span class="form-error">{{ errors.first('email') }}</span> -->
      </div>

      <div class="form-control">
        <label for="password">Password</label>
        <input type="password" name="password" id="password" class="login-input" v-model="password">
        <!-- <span class="form-error">{{ errors.first('password') }}</span> -->
      </div>

      <div class="form-control">
        <input type="submit" class="btn-submit" value="Login">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      name: '',
      email: '',
      password: '',
      serverErrors: '',
      successMessage: '',
    };
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