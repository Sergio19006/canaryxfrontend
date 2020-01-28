<template>
  <div class="content">
    <h1 class="title">Book</h1>
    <div class="calendar">
      <b-datepicker
        v-model="date"
        inline
        :editable="true"
        :first-day-of-week="1"
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
      date: new Date(),
      da:""
    };
  },
  mounted() {
    this.da = this.$store.state.trip.date;
    this.da = this.da.split("-");
    this.date = new Date(
      parseInt(this.da[0]),
      parseInt(this.da[1]) - 1,
      parseInt(this.da[2])
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