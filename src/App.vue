<template>
  <div id="app">
    <Navbar :loggued=loggued />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar';

export default {
  name: "app",
  components: {
    Navbar
  },
  data(){
    return{
      loggued: Boolean(this.$store.state.email) 
    }
  },
  computed: {
    login () {
      return Boolean(this.$store.state.email);
    }
  },
  watch: {
    login () {
      // eslint-disable-next-line
      console.log(`We have fruits now, yaay!`)
    }
  },
};
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
#app {
  width: 100%;
}
// Set your colors
$primary: #e2725b;
$primary-invert: findColorInvert($primary);
$twitter: #4099ff;
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
  "white": (
    $white,
    $black
  ),
  "black": (
    $black,
    $white
  ),
  "light": (
    $light,
    $light-invert
  ),
  "dark": (
    $dark,
    $dark-invert
  ),
  "primary": (
    $primary,
    $primary-invert
  ),
  "info": (
    $info,
    $info-invert
  ),
  "success": (
    $success,
    $success-invert
  ),
  "warning": (
    $warning,
    $warning-invert
  ),
  "danger": (
    $danger,
    $danger-invert
  ),
  "twitter": (
    $twitter,
    $twitter-invert
  )
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

$family-primary: 'Roboto', sans-serif;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>

