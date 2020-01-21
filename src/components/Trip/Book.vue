<template>
  <div class="content">
    <h1 class="title">Book</h1>
    <div class="calendar">
      <b-datepicker
        v-model="date"
        inline
        :editable="true"
        :first-day-of-week="1"
        :date-parser="dataParser"
      ></b-datepicker>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    d: String
  },
  data() {
    return {
      date: new Date()
    };
  },
  mounted() {
    this.d = this.$store.state.trip.date;
    this.d = this.d.split("-");
    this.date = new Date(
      parseInt(this.d[0]),
      parseInt(this.d[1]) - 1,
      parseInt(this.d[2])
    );
  }
};
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  text-align: center;
}

.calendar {
  display: flex;
  justify-content: center;
  pointer-events: none;
}
</style>