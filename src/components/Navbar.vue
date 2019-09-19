<template>
  <b-navbar transparent="true">
      <template slot="brand">
        <router-link to="/">
        <figure class="image is-128x64">
          <img src="../assets/Logonavbar.png" />
        </figure>
        </router-link>
      </template>
    

    <template slot="end">
      <b-navbar-item href="#">Host an expirience</b-navbar-item>
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
        <b-navbar-item tag="router-link" :to="{ path: '/login' }">
          <a class="button is-light">Log in</a>
        </b-navbar-item>
      </div>
    </template>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.image {
  width: 50%;
  padding: 10px;
}
</style>