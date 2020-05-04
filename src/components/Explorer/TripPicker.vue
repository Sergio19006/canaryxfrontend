<template>
  <div class="book">
    <div class="card">
      <div class="card-content">
        <h3 class="title">Book unique places to do an anforgettable trip.</h3>
        <div>
          <b-field label="Where">
            <b-autocomplete
              size="is-medium"
              v-model="name"
              :data="filteredDataArray"
              placeholder="e.g. Puerto de la Cruz"
              :keep-first="true"
              :open-on-focus="true"
              icon="magnify"
              @select="option => place = option"
            >
              <template slot="empty">No results found</template>
            </b-autocomplete>
          </b-field>
          <b-field label="Select a date" class="datapicker">
            <b-datepicker
              placeholder="Click to select..."
              v-model="date"
              :events="events"
              icon="calendar-today"
              size="is-medium"
            ></b-datepicker>
          </b-field>
        </div>
        <b-field label="Guests">
          <b-numberinput
            @click.native="setNumberOfPersons()"
            v-model="guest"
            min="0"
            controls-rounded
          ></b-numberinput>
        </b-field>
        <b-button @click="findTrips()" class="margin-top" type="is-primary" outlined>Find a trip</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
const thisMonth = new Date().getMonth();
const thisYear = new Date().getFullYear();
export default {
  props: {
    sendData: Function
  },
  data() {
    return {
      events: [new Date("2020-01-12"), new Date(thisYear, thisMonth, 6)],
      places: [],
      name: "",
      place: null,
      date: [],
      guest: 1
    };
  },

  async mounted() {
    const response = await this.$http.post(
      `${process.env.VUE_APP_API}/api/v1/trips/findTrips`
    );
    for (let trip of response.data) {
      this.places.push(trip.place);
    }

    this.places = [...new Set(this.places)];
    this.guest = this.$store.state.numberOfPersons;
  },

  methods: {
    async findTrips() {
      const query = {
        date: moment(this.date).format("YYYY-MM-DD"),
        place: this.place,
        guests: this.guest
      };
      this.$store.commit("setQuery",query);
      var event = new CustomEvent("filter");
      window.dispatchEvent(event);
    },
    setNumberOfPersons() {
      this.$store.commit("setNumberOfPersons", this.guest);
    }
  },

  computed: {
    filteredDataArray() {
      return this.places.filter(option => {
        return (
          option
            .toString()
            .toLowerCase()
            .indexOf(this.name.toLowerCase()) >= 0
        );
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.book {
  max-width: 411px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

h3 {
  text-align: center;
  padding-bottom: 20px;
}

.card {
  border: 1px solid transparent;
  border-radius: 6px;
}

.card-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 475px;
  padding: 0.5rem;
}

.margin-top {
  margin-top: 15px;
}

@media only screen and (max-width: 450px) {
  .book {
    background-color: beige;
    max-width: 100%;
    padding: 0px;
    margin-top: 25vw;
  }

  .pick {
    justify-content: center;
  }
}
</style>