<template>
  <div class="content">
    <h1 class="title">Book</h1>
    <div class="calendar">
      <b-datepicker v-model="date" inline :unselectable-days-of-week="[0, 6]"></b-datepicker>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date()
    };
  }
};
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  text-align: center;
}

.calendar{
  display: flex;
  justify-content: center;
}
</style>