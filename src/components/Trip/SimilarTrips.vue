<template>
  <div>
    <h3 class="title">Similar Trips</h3>
    <div class="box">
      <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img src="../../assets/teide.jpg" alt="Image" />
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{{title}}</strong>
              <br />
              {{description}}
            </p>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: String
  },
  data() {
    return {
      title: "",
      description: ""
    };
  },

  async mounted() {
    const data = {
      id: this.id
    };

    const response = await this.$http.post(
      "http://localhost:3000/api/v1/trips/tripById",
      data
    );

    this.title = response.data.title;
    this.description = response.data.description;
  }
};
</script>

<style lang="scss" scoped>
.box {
  padding: 0px;
}
</style>