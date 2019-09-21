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
              @select="option => selected = option"
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
          <b-numberinput @click="a()" v-model="guest" min="0" controls-rounded></b-numberinput>
        </b-field>
        <b-button class="margin-top" type="is-primary" outlined>Find a trip</b-button>
      </div>
    </div>
  </div>
</template>

<script>
const thisMonth = new Date().getMonth();
const thisYear = new Date().getFullYear();
export default {
  data() {
    return {
      events: [
        new Date(thisYear, thisMonth, 2),
        new Date(thisYear, thisMonth, 6),
        {
          date: new Date(thisYear, thisMonth, 6),
          type: "is-info"
        },
        {
          date: new Date(thisYear, thisMonth, 8),
          type: "is-danger"
        },
        {
          date: new Date(thisYear, thisMonth, 10),
          type: "is-success"
        },
        {
          date: new Date(thisYear, thisMonth, 10),
          type: "is-link"
        },
        new Date(thisYear, thisMonth, 12),
        {
          date: new Date(thisYear, thisMonth, 12),
          type: "is-warning"
        },
        {
          date: new Date(thisYear, thisMonth, 16),
          type: "is-danger"
        },
        new Date(thisYear, thisMonth, 20),
        {
          date: new Date(thisYear, thisMonth, 29),
          type: "is-success"
        },
        {
          date: new Date(thisYear, thisMonth, 29),
          type: "is-warning"
        },
        {
          date: new Date(thisYear, thisMonth, 29),
          type: "is-info"
        }
      ],
      sites: ["Puerto de la Cruz", "Teno", "Taganana", "Teide"],
      name: "",
      selected: null,
      date: "",
      guest: 1
    };
  },

  methods: {},

  computed: {
    filteredDataArray() {
      return this.sites.filter(option => {
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
  width: 411px;
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
  padding: 0px;
}

.margin-top {
  margin-top: 15px;
}

@media only screen and (max-width: 450px) {
  .book {
    background-color: beige;
    width: 100%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 0px;
    margin-top: 25vw;
  }
}
</style>