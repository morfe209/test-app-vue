<template>
  <div>
    Search User by name:
    <input @change="filterUserByName($event)" value=""/>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "FilterUsers",
  methods: mapActions(["filterUserByName"])
};
</script>

<style>
select {
  margin-top: 20px;
  padding: 6px;
  border: #41b883 1px solid;
}
</style>