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
      ids: [],
      trips: {}
    };
  },

  async mounted() {
    const response = await this.$http.post(
      `${process.env.VUE_APP_API}/api/v1/trips/findTrips`
    );

    for (let trip of response.data) {
      this.ids.push(trip._id);
    }

    this.trips = response.data;

    this.createTrips();

    window.addEventListener("filter", () => {
      this.getQuery();
    });
  },

  components: {
    TripPicker
  },
  methods: {
    async getQuery() {
      const query = this.$store.state.query;
      const flex = document.querySelector(".flex");
      let child = flex.lastElementChild;
      while (child) {
        flex.removeChild(child);
        child = flex.lastElementChild;
      }
      this.createTrips(query);
    },

    createTrips(query) {
      let indexFlex = 0;

      for (let index = 0; index < this.ids.length; index++) {
        if (query != undefined) {
            if(query.place.includes(this.trips[index].place)){
              this.checkLayout(indexFlex,index);
              indexFlex++;
            }   
        } 
        else {
          this.checkLayout(indexFlex,index);
          indexFlex++;
        }
      }
    },
    createTrip(index, filter) {
      const trips = document.querySelector(".flex").lastElementChild;
      const trip = document.createElement("div");
      trip.classList.add("column");
      trip.classList.add("is-4");
      const ComponentClass = Vue.extend(PrincipalsTrips);

      let instance = new ComponentClass({
        propsData: { id: this.ids[index], filter: filter },
        store,
        router
      });
      instance.$mount();
      trip.appendChild(instance.$el);
      trips.appendChild(trip);
    },

    createTripColumn(index,filter) {
      const con = this.$refs.container;
      const container = document.createElement("div");
      container.classList.add("columns");
      const trip = document.createElement("div");
      trip.classList.add("column");
      trip.classList.add("is-4");
      const ComponentClass = Vue.extend(PrincipalsTrips);
      let instance = new ComponentClass({
        propsData: { id: this.ids[index], filter: filter },
        store,
        router
      });
      instance.$mount();
      trip.appendChild(instance.$el);
      container.appendChild(trip);
      con.appendChild(container);
    },

    checkLayout(indexFlex,index,filter){
      if (indexFlex % 3 != 0) 
        this.createTrip(index,filter);
      if (indexFlex % 3 == 0 || indexFlex == 0)
        this.createTripColumn(index,filter);
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
