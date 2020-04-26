<template>
  <div>
    <div class="columns">
      <div class="column is-2 flex2">
        <Menu />
        <div class="flex2">
          <button @click="addTrip()" class="button is-primary">New Trip</button>
        </div>
      </div>
      <div ref="container" class="flex">
        <div class="columns"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import AdminTrip from "../components/Admin/AdminTrip";
import Menu from "../components/Admin/Menu";
import { store } from "../store";
import router from "../routes";
export default {
  data() {
    return {
      ids: []
    };
  },
  components: {
    Menu
  },
  async mounted() {
    const owner = {
      owner: this.$store.state.email
    }
    const response = await this.$http.post(`${process.env.VUE_APP_API}/api/v1/trips/tripsByOwner`,owner);
    for(let trips of response.data){
      this.ids.push(trips._id);
    }
    
    for (let index = 0; index < this.ids.length; index++) {
      if (index % 4 != 0 || index == 0) {
        const trips = document.querySelector(".flex").lastElementChild;
        const trip = document.createElement("div");
        trip.classList.add("column");
        trip.classList.add("is-3");
        const ComponentClass = Vue.extend(AdminTrip);
        let instance = new ComponentClass({
          propsData: { id: this.ids[index] },
          store,
          router
        });
        instance.$mount();
        trip.appendChild(instance.$el);
        trips.appendChild(trip);
      }
      if (index % 4 == 0 && index != 0) {
        const con = this.$refs.container;
        const container = document.createElement("div");
        container.classList.add("columns");
        const trip = document.createElement("div");
        trip.classList.add("column");
        trip.classList.add("is-3");
        const ComponentClass = Vue.extend(AdminTrip);
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
  },
  methods: {
    async addTrip () {
      const data = {
        owner: this.$store.state.email
      }
      await this.$http.post(`${process.env.VUE_APP_API}/api/v1/trips/addTrip`,data);
      window.location.reload();
    }
  }
};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.flex2 {
  display: flex;
  justify-items: center;
  align-content: center;
  flex-direction: column;
}
</style>