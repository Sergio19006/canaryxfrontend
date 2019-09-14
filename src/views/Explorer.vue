<template>
  <div class="body">
    <div class="container">
      <TripPicker/>
    </div>
  </div>
</template>

<script>

import TripPicker from '../components/TripPicker';

export default {
  props: {
    msg: String
  },

  data() {
    return {};
  },

  components: {
    TripPicker
  },

  
};
</script>

<style scoped>
.body {
  width: 100vw;
  height: 50vw;
  background-image: url("../assets/teide.png");
  background-repeat: no-repeat;
  background-size: 100%, auto;

}

.container {
  padding-top: 50px;
}

</style>
