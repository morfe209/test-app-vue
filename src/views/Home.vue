<template>
  <div id="home">
    <div class="home">
      <!-- <AddTodo/>
      <FilterTodos/>-->
      <Users/>
    </div>
  </div>
</template>

<script>
import Users from "../components/Users.vue";
// import AddTodo from "../components/AddTodo.vue";
// import FilterTodos from "../components/FilterTodos.vue";

export default {
  name: "Home",
  components: {
    Users
    // AddTodo,
    // FilterTodos
  }
};
</script>

<style>
.home {
  width: 100%;
}
</style>