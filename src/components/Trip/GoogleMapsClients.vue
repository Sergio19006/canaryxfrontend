<template>
  <div>
    <br />
    <gmap-map :center="center" :zoom="12" style="width:100%;  height: 400px;">
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      center: {},
      markers: [],
      places: [],
      currentPlace: null
    };
  },

  mounted() {
    this.currentPlace = JSON.parse(this.$store.state.clientTrip.coordenates);
    this.center = { lat: 28.2723384, lng: -16.64250800000002 }
    this.geolocate();
    setTimeout(this.addMarker, 100);
  },

  methods: {
    addMarker() {
      const marker = {
        lat: this.currentPlace.lat,
        lng: this.currentPlace.lng
      };
      this.markers.push({ position: marker });
      this.places.push(this.currentPlace);
      this.center = marker;
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>