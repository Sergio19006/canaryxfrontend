<template>
  <div class="book">
    <div class="card">
      <div class="card-content">
        <h3 class="title">Book unique places to do an unforgettable trip.</h3>
        <b-field label="Where">
          <b-input placeholder="Tenerife..." type="search" icon="magnify" size="is-medium"></b-input>
        </b-field>
        <b-field label="Select a date">
          <b-datepicker
            placeholder="Click to select..."
            v-model="date"
            :events="events"
            icon="calendar-today"
            size="is-medium"
          ></b-datepicker>
        </b-field>
          <b-field label="Guest">
            <b-numberinput @click="a()" v-model="guest" min="0" controls-rounded></b-numberinput>
          </b-field>

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
      date: "",
      guest: 1
    };
  },

  methods: {
  }
};
</script>

<style scoped>
.book {
  background-color: beige;
  width: 441px;
}

h3 {
  text-align: center;
  padding-bottom: 20px;
}

.card-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 475px;
}

.b-button {
  margin-top: 20px;
}

.separed {
  margin-top: 15px;
}
</style>