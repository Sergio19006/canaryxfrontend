<template>
  <div class="container">
    <div class="trip">
      <div class="box">
        <img src="../../assets/teide.jpg" alt />
        <article class="media">
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{{title}}</strong>
                <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
              </p>
            </div>
            <nav class="level is-mobile">
              <div class="level-left">
                <span @click="setTrip()" class="level-item" aria-label="reply">
                  <b-icon icon="pencil"></b-icon>
                </span>
              </div>
            </nav>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "El titulo tal"
    };
  },

  methods: {
    setTrip() {
      //Aqui setear todos los rollos pa pillarlo en el newtrip
      this.$router.push("newtrip");
    }
  }
};
</script>

<style lang="scss" scoped>

$primary: #e2725b;
.trip {
  background-color: beige;
  margin: 20px;
}

.level-item:hover {
  color: $primary;
}
</style>