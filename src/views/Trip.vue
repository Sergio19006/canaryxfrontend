<template>
  <div>
    <div>
      <figure class="image is-3by1 main">
        <img src="../assets/6.jpg" alt />
        <div class="flex">
          <button @click="buyTrip()" class="button is-primary is-large">Buy Trip!</button>
        </div>
      </figure>
    </div>
    <section>
      <div class="container">
        <div class="columns">
          <div class="column is-5 trip-title">
            <figure class="image is-64x64">
              <img class="is-rounded" src="../assets/thomas.png" />
            </figure>
            <h1 class="title">{{title}}</h1>
            <h2 class="subtitle">Trip to {{place}} organizated by {{owner}}</h2>
          </div>
          <div class="column">
            <p>{{description}}</p>
          </div>
        </div>
        <Collage v-if="renderCollage" :images="images" />
      </div>
    </section>
    <section>
      <div class="container">
        <div class="columns books">
          <div class="column is-8">
            <h1 class="title">Conditions</h1>
            <Conditions
              :transport="transport"
              :place="place"
              :type="type"
              :totalPersons="totalPersons"
              :guide="guide"
              :lunch="lunch"
              :hour="hour"
              :date="date"
              :island="island"
              :participants="participants"
              :avgScore="avgScore"
              :organizator="organizator"
              :conditions="conditions"
              :price="price"
            />
          </div>
          <div class="column is-4">
            <Book />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="maps">
          <GoogleMapsClients />
        </div>
      </div>
    </section>
    <section>
      <br />
      <div class="container">
        <div class="columns">
          <div class="column is-9" ref="reviews">
            <button class="button is-primary review" @click="addReview()">Add new review</button>
          </div>
          <div ref="similarTrips" class="column is-3 similar"></div>
        </div>
      </div>
    </section>
    <div class="flex">
      <button @click="buyTrip()" class="button is-primary is-large">Buy Trip!</button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Collage from "../components/Trip/Collage";
import Book from "../components/Trip/Book";
import Conditions from "../components/Trip/Conditions";
import GoogleMapsClients from "../components/Trip/GoogleMapsClients";
import Reviews from "../components/Trip/Reviews";
import SimilarTrips from "../components/Trip/SimilarTrips";

import { store } from "../store";
import router from "../routes";

export default {
  props: {
    id: String
  },

  data: () => {
    return {
      transport: true,
      place: "Teide",
      type: "Walk",
      totalPersons: 20,
      guide: "Socio",
      lunch: true,
      hour: "11:00",
      date: "2019-10-25",
      reviews: [],
      island: "Tenerife",
      participants: 10,
      avgScore: 5.5,
      organizator: "Tui",
      conditions: [
        "Esto es una condicion00",
        "Esto es otra condicion",
        "y esta es la ultima condicion"
      ],
      images: [],
      price: 55,
      coordenates: {},
      owner: "Tui",
      logo: "../assets/thomas.png",
      title: "Excursionaza al teide papu",
      description: "Descripotion ofhvgofghoi",
      guest: 0,
      renderCollage: false
    };
  },

  async mounted() {

    for (let property in this.$data) {
      for (let property2 in this.$store.state.clientTrip) {
        if (property == property2)
          this.$data[property] = this.$store.state.clientTrip[property2];
      }
    }
    
    this.renderCollage = true;

    this.guest = this.$store.state.numberOfPersons;

    const data = {
      type: this.$store.state.clientTrip.type,
      _id: this.$store.state.clientTrip._id
    };

    const response = await this.$http.post(
      `${process.env.VUE_APP_API}/api/v1/trips/similarTrips`,
      data
    );

    for (const trip of response.data) {
      const ComponentClass = Vue.extend(SimilarTrips);
      let instance = new ComponentClass({
        propsData: { id: trip._id },
        router,
        store

      });
      instance.$mount();
      this.$refs.similarTrips.appendChild(instance.$el);
    }

    this.images = ["../../assets/1.jpg"]
  },

  methods: {
    addReview() {
      const ComponentClass = Vue.extend(Reviews);
      let instance = new ComponentClass({
        propsData: { showResponse: false, showReview: false }
      });
      instance.$mount();
      this.$refs.reviews.appendChild(instance.$el);
      let button = document.querySelector(".review");
      button.remove();
      this.$refs.reviews.appendChild(button);
    },
    async buyTrip() {
      this.$router.push("/buy");
    }
  },

  components: {
    Collage,
    Book,
    Conditions,
    GoogleMapsClients
  }
};
</script>

<style lang="scss" scoped>
.columns {
  margin: 3% 0%;
}

.maps {
  margin: auto;
}

.similar {
  padding-top: 0px;
}

.flex {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3%;
}
</style>