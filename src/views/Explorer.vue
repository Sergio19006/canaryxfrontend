<template>
  <div>
    <div class="body">
      <div class="container">
        <TripPicker />
      </div>
    </div>
    <div class="container">
      <PrincipalsTrips />
    </div>
  </div>
</template>

<script>
import TripPicker from "../components/TripPicker";
import PrincipalsTrips from "../components/PrincipalsTrips";

export default {
  props: {
    msg: String
  },

  data() {
    return {};
  },

  components: {
    TripPicker,
    PrincipalsTrips
  }
};
</script>

<style lang="scss" scoped>
.body {
  width: 100vw;
  height: 50vw;
  background-image: url("../assets/teide.jpg");
  background-repeat: no-repeat;
  background-size: 100%, auto;
}

.container {
  padding: 50px 0px 0px 0px;
}
</style>
