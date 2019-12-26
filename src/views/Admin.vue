<template>
  <div>
    <div class="columns">
      <div class="column is-2">
        <Menu />
        <button class="button is-primary">New Trip</button>
      </div>
      <div class="column is-3">
        <AdminTrip />
      </div>
      <div class="column is-3">
        <AdminTrip />
      </div>
      <div class="column is-3">
        <AdminTrip />
      </div>
    </div>
  </div>
</template>

<script>
//import AdminTrip from "../components/Admin/AdminTrip";
import Menu from "../components/Admin/Menu";
export default {
  components: {
    //AdminTrip,
    Menu
  }
};
</script>

<style lang="scss" scoped>
</style>