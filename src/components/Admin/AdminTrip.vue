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
                <br/>
                {{description}}
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
  props: {
    id: String
  },

  data() {
    return {
      transport: true,
      place: "El puerto",
      type: "Walk",
      totalPersons: 10,
      guide: "guide",
      lunch: true,
      hour: "13:00",
      date: "2019-12-13",
      reviews: [],
      island: "Tenerife",
      avgScore: 5,
      organizator: "organizadortal@gmail.com",
      conditions: ["tal", "cual"],
      images: [],
      active: true,
      price: 10,
      coordenates: {lat: 28.2723384, lng: -16.64250800000002}, //send this properties to the googleMapsBusiness
      owner: "organizadortodotal@gamil.com",
      title: "titulo tal",
      description: "description tal"
    };
  },

  methods: {
    setTrip() {
     const trip = {}
      for (let property in this.$data) 
       trip[property] = this.$data[property]
      this.$store.commit('setTrip',trip)
      this.$router.push("newtrip");
    }
  },
  mounted(){
    //Mapear cada uno de los tal del data a object de la request
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