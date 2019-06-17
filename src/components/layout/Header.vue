  
<template>
  <header class="header">
    <h1>Users List</h1>
    <div id="nav">
      <div class="nav-item">
        <router-link to="/home">Home</router-link>|
      </div>
      <div class="nav-item">
        <router-link to="/about">About</router-link>|
      </div>
      <!-- <div class="nav-item">
        <router-link to="/create">Create</router-link>|
      </div>-->
      <div class="nav-item" v-if="!loggedIn">
        <router-link to="/login">Login</router-link>|
      </div>
      <div class="nav-item" v-if="!loggedIn">
        <router-link to="/register">Register</router-link>
      </div>
      <div class="nav-item" v-if="loggedIn">
        <router-link to="/logout">Logout</router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    }
  }
};
</script>

<style scoped>
.header {
  background: #343a40;
  width: 100%;
  color: #fff;
  text-align: center;
  padding: 10px;
}
.header a {
  color: #fff;
  padding-right: 5px;
  text-decoration: none;
}
.nav-item {
  display: inline;
}
</style>
