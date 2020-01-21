<template>
  <b-navbar class="nav">
    <template slot="brand">
      <router-link to="/">
        <figure class="image is-128x64">
          <img src="../assets/Logonavbar.png" />
        </figure>
      </router-link>
    </template>

    <template slot="end">
      <b-navbar-item tag="router-link" :to="{ path: '/experience' }">Host an expirience</b-navbar-item>
      <b-navbar-dropdown label="Help">
        <b-navbar-item href="#">About</b-navbar-item>
        <b-navbar-item href="#">Contact</b-navbar-item>
      </b-navbar-dropdown>
      <div class="buttons">
        <b-navbar-item tag="router-link" :to="{ path: '/signup' }">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
        </b-navbar-item>
        <b-navbar-item v-if="!loggued" tag="router-link" :to="{ path: '/login' }">
          <a class="button is-light">Log in</a>
        </b-navbar-item>
        <b-navbar-item v-if="loggued" @click="logOut">
          <a class="button is-light">Log out</a>
        </b-navbar-item>
      </div>
    </template>
  </b-navbar>
</template>

<script>
export default {
  data() {
    return {
      loggued: Boolean(this.$store.state.email)
    };
  },
  mounted() {
    if (this.$store.state.email != "") this.loggued = true;
  },
  methods: {
    logOut() {
      this.loggued = false;
      this.$store.commit("setEmail");
    },
    updateNabvar() {
      this.loggued = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.image {
  width: 50%;
  padding: 10px;
}
</style>