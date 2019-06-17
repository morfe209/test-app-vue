<template></template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Logout",
  methods: {
    ...mapActions(["destroyToken"])
  },
  created() {
    this.destroyToken().then(response => {
      this.$router.push({ name: "home" });
    });
  }
};
</script>