<template>
  <div class="container main">
    <div class="columns">
      <div class="column">
        <figure @click="goTrip()" class="box">
          <img :src="image" alt />
          <div class="columns">
            <div class="column is-6">
              <h1 class="title">{{title}}</h1>
              <h2 class="subtitle">{{place}}</h2>
            </div>
            <div class="column is-2 is-offset-4">
              <h1 class="subtitle">{{price}}€</h1>
            </div>
          </div>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: String
  },
  data: () => {
    return {
      price: 0,
      title: "",
      images: [],
      place: "",
      trip: {}
    };
  },
  async mounted() {
    const response = await this.$http.post(
      `${process.env.VUE_APP_API}/api/v1/trips/tripById`,
      { id: this.id }
    );
    this.trip = response.data;

    for (let property in this.$data) {
      for (let property2 in response.data) {
        if (property == property2)
          this.$data[property] = response.data[property];
      }
    }
    this.image = this.images[0];
  },
  methods: {
    goTrip() {
      this.$store.commit("setClientTrip", this.trip);
      this.$router.push("Trip");
    }
  }
};
</script>

<style lang="scss" scoped></style>
