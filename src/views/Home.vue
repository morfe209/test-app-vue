<template>
  <div id="home">
    <div class="home">
      <Table/>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Table from "../components/Table";

export default {
  name: "Home",
  components: {
    Table
  },
  methods: {
    ...mapActions(["fetchUsers"])
  },
  created() {
    this.fetchUsers();
  }
};
</script>
<style>
.home {
  width: 100%;
}
</style>