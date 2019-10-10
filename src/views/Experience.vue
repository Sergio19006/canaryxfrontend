<template>
  <div>
    <video autoplay muted loop class="video">
      <source src="../assets/video.mp4" type="video/mp4" />
    </video>

    <div class="back">
      <div class="container publi">
        <h1 class="text">Offer your own trips</h1>
        <h2 class="subtitle">
          Create a trip in Canary Xperience, offer yours users an unforggetable
          experience, make money and
          have everything in the same place.
        </h2>
        <button class="button is-primary is-large">Start!</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
  font-size: 4vw;
}

@media only screen and (max-width: 450px) {
  .text {
    font-size: 10vw;
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
  box-shadow: 4px 3px 13px -4px rgba(0,0,0,0.68);
}
}

@media only screen and (min-width: 450px) and (max-width: 1000px) {
  .text {
    font-size: 5vw;
  }
}
</style>