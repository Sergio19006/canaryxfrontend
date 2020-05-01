<template>
  <div>
    <div class="grid-container">
      <div class="top-left">
        <figure class="image is-4by3">
          <img v-bind:src=fImage alt />
        </figure>
      </div>
      <div class="top-rigth">
        <figure class="image is-4by3">
          <img v-bind:src=sImage alt />
        </figure>
      </div>
      <div class="top-more-rigth">
        <figure class="image is-4by3">
          <img v-bind:src=tImage alt />
        </figure>
      </div>
      <div class="bottom-rigth">
        <figure class="image is-4by3">
          <img v-bind:src=foImage alt />
        </figure>
      </div>
      <div class="bottom-left">
        <figure class="image is-4by3">
          <img v-bind:src=ffImage alt />
        </figure>
      </div>
      <div class="bottom-more-left">
        <figure class="image is-4by3">
          <img v-bind:src=siImage alt />
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  props : {
    images: Array
  },

  data: () => {
    return{
      fImage: "",
      sImage: "",
      tImage: "",
      foImage: "",
      ffImage: "",
      siImage: ""
    }
  },

  mounted(){
    this.fImage = this.images[0];
    this.sImage = this.images[1];
    this.tImage = this.images[2];
    this.foImage = this.images[3];
    this.ffImage = this.images[4];
    this.siImage = this.images[5];

  }
  
};
</script>

<style lang="scss" scoped>
.grid-container {
  display: grid;
  grid-column-gap: 10px;
  grid-row-gap: 15px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    "top-left top-left top-rigth top-more-rigth"
    "top-left top-left bottom-rigth bottom-rigth"
    "bottom-more-left bottom-left bottom-rigth bottom-rigth";
}

.image {
  box-shadow: 4px 3px 13px -4px rgba(0,0,0,0.68);
}

.top-left {
  grid-area: top-left;
}

.top-rigth {
  grid-area: top-rigth;
}

.top-more-rigth {
  grid-area: top-more-rigth;
}

.bottom-rigth {
  grid-area: bottom-rigth;
  margin-top: 6.5px;
}

.bottom-left {
  grid-area: bottom-left;
}

.bottom-more-left {
  grid-area: bottom-more-left;
}

@media only screen and (max-width: 450px) {
  .grid-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
}
</style>