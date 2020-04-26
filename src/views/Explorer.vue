<template>
  <div>
    <div class="body">
      <div class="container pick">
        <TripPicker :sendData="getQuery" />
      </div>
    </div>
    <div ref="container" class="container principal flex">
      <div class="columns"></div>
    </div>
  </div>
</template>

<script>
import TripPicker from "../components/Explorer/TripPicker";
import PrincipalsTrips from "../components/Explorer/PrincipalsTrips";
import { store } from "../store";
import router from "../routes";
import Vue from "vue";

export default {
  data() {
    return {
      ids: []
    };
  },

  async mounted() {
    const response = await this.$http.post(
      `${process.env.VUE_APP_API}/api/v1/trips/findTrips`
    );
    
    for (let trip of response.data) {
      this.ids.push(trip._id);
    }
    this.createTrips();
  },

  components: {
    TripPicker
  },
  methods: {
    async getQuery(query) {
      const response = await this.$http.post(
       `${process.env.VUE_APP_API}/api/v1/trips/findTrips`,
        query
      );
      const flex = document.querySelector(".flex");
      let child = flex.lastElementChild;
      while (child) {
        flex.removeChild(child);
        child = flex.lastElementChild;
      }
      for (let trip of response.data) this.ids.push(trip._id);

      this.createTrips();
    },
    createTrips() {
      for (let index = 0; index < this.ids.length; index++) {
        if (index % 3 != 0) {
          const trips = document.querySelector(".flex").lastElementChild;
          const trip = document.createElement("div");
          trip.classList.add("column");
          trip.classList.add("is-4");
          const ComponentClass = Vue.extend(PrincipalsTrips);
          
          let instance = new ComponentClass({
            propsData: { id: this.ids[index] },
            store,
            router
          });
          instance.$mount();
          trip.appendChild(instance.$el);
          trips.appendChild(trip);
        }
        if (index % 3 == 0 || index == 0) {
          const con = this.$refs.container;
          const container = document.createElement("div");
          container.classList.add("columns");
          const trip = document.createElement("div");
          trip.classList.add("column");
          trip.classList.add("is-4");
          const ComponentClass = Vue.extend(PrincipalsTrips);
          let instance = new ComponentClass({
            propsData: { id: this.ids[index] },
            store,
            router
          });
          instance.$mount();
          trip.appendChild(instance.$el);
          container.appendChild(trip);
          con.appendChild(container);
        }
      }
      this.ids = [];
    }
  }
};
</script>

<style lang="scss" scoped>
.body {
  width: 100vw;
  height: 45vw;
  background-image: url("../assets/teide.jpg");
  background-repeat: no-repeat;
  background-size: 100%, auto;
  min-height: 600px;
}

.container {
  padding: 50px 0px 0px 0px;
}
</style>
