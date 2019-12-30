<template>
  <div>
    <div class="columns">
      <div class="column is-2">
        <Menu />
        <button class="button is-primary">New Trip</button>
      </div>
      <!-- Aqui empieza el for para hacer el rollo de las tal -->
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
export default {
  data() {
    return {
      ids: [],
    };
  },
  components: {
    Menu
  },
  mounted() {
    //pillar todads las escirsiones en las que sea el owner del tipo que este conectado
    this.ids = ["1", "2"];
    
    for (let index = 0; index < this.ids.length; index++) {
      if (index % 4 != 0 || index == 0) {
        const trips = document.querySelector('.flex').lastElementChild;
        // eslint-disable-next-line
        console.log(trips)
        const trip = document.createElement("div");
        trip.classList.add("column");
        trip.classList.add("is-3");
        const ComponentClass = Vue.extend(AdminTrip);
        let instance = new ComponentClass({
          propsData: { id: this.ids[index] }
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
          propsData: { id: this.ids[index] }
        });
        instance.$mount();
        trip.appendChild(instance.$el);
        container.appendChild(trip);
        con.appendChild(container);
        // eslint-disable-next-line
        console.log(con)
      }
    }
  },
  methods: {
    addTrip() {
      const ComponentClass = Vue.extend(AdminTrip);
      let instance = new ComponentClass({
        propsData: { id: this.id }
      });
      instance.$mount();
      this.$refs.reviews.appendChild(instance.$el);
      let button = document.querySelector(".review");
      button.remove();
      this.$refs.reviews.appendChild(button);
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
  .columns:last-child {
    margin-bottom: calc(1.5rem - 0.75rem);
  }
</style>