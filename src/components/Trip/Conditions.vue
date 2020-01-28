<template>
  <div class="columns">
    <div class="column is-6 box box-color">
      <ul>
        <li
          class="box is-medium margin"
          v-for="condition in conditions"
          v-bind:key="condition"
        >{{condition}}</li>
      </ul>
    </div>
    <div class="column is-6 margin-left">
      <div v-if="transport">
        Transport
        <b-icon icon="bus"></b-icon>
      </div>
      <div v-if="lunch">
        Lunch
        <b-icon icon="food"></b-icon>
      </div>
      <br />
      <strong>Island: {{island}}</strong>
      <strong>Guide: {{guide}}</strong>
      <strong>Persons: {{participants}}/{{totalPersons}}</strong>
      <strong>Hour: {{hour}}</strong>
      <strong>Type: {{type}}</strong>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    conditions: Array,
    date: String,
    transport: Boolean,
    lunch: Boolean,
    type: String,
    totalPersons: Number,
    guide: String,
    hour: String,
    island: String,
    participants: Number,
    avgScore: Number,
    organizator: String
  }
};
</script>

<style lang="scss" scoped>
$primary: #e2725b;
.box {
  padding: 0.5rem;
}

.box-color {
  background-color: $primary;
}

.margin {
  margin: 3%;
}
.margin-left {
  margin-left: 3%;
  display: flex;
  align-items: center;
  justify-items: center;
  align-content: center;
  flex-direction: column;
  font-size: 18px;
}
</style>