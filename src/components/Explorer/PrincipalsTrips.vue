<template>
  <div class="container main">
    <div class="columns">
      <div class="column">
        <figure @click="setTrip()" class="box">
          <img src="../../assets/6.jpg" alt />
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
      place: ""
    };
  },
  async mounted() {
    const response = await this.$http.post(
      "http://localhost:3000/api/v1/trips/tripById",
      { id: this.id }
    );
    // eslint-disable-next-line
        console.log(response.data);

    for (let property in this.$data) {
      for (let property2 in response.data) {
        if (property == property2)
          this.$data[property] = response.data[property];
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
