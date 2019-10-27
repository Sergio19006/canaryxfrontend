<template>
  <div>
    <video autoplay loop class="video">
      <source src="../assets/video.mp4" type="video/mp4" />
    </video>

    <figure class="frame">
      <img class="video" src="../assets/videoFrame.png" alt />
    </figure>

    <div class="back">
      <div class="container publi">
        <h1 class="text">Create a trip in Canary Xperience</h1>
        <h2 class="subtitle">
          Offer yours users an unforggetable
          experience, make money and
          have everything in the same place.
        </h2>
        <router-link to="newtrip">
          <button class="button is-primary is-large">Start!</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.$el.querySelector(".video").pause();
    this.$el.querySelector(".video").oncanplaythrough = () => {
      this.videoPlay();
    };
  },
  methods: {
    videoPlay() {
      this.$el.querySelector(".video").play();
      this.$el.querySelector(".frame").remove();
    }
  }
};
</script>

<style lang="scss" scoped>
.publi {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.back {
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px;
}

.video {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -1;
}

.subtitle {
  text-align: center;
  max-width: 70%;
  color: #e2725b;
}

.text {
  text-align: center;
  text-transform: uppercase;
  background: linear-gradient(to right, #e2725b 0%, #cc4124 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3vw;
  overflow: hidden;
  white-space: nowrap;
  margin: 0 auto;
  animation: typing 4s steps(40, end), blink-caret 0.75s step-end;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@media only screen and (max-width: 450px) {
  .text {
    font-size: 10vw;
    white-space: normal;
    animation: 0;
  }
  .video {
    max-width: 100%;
    min-height: 1%;
    position: relative;
  }
  .back {
    width: 100%;
    background: rgba(0, 0, 0, 0);
    padding: 10px;
    box-shadow: 4px 3px 13px -4px rgba(0, 0, 0, 0.68);
  }
}

@media only screen and (min-width: 450px) and (max-width: 1000px) {
  .text {
    font-size: 5vw;
  }
}
</style>