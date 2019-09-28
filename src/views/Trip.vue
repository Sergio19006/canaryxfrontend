<template>
  <div>
    <div>
      <figure class="image is-3by1 main">
        <img src="../assets/6.jpg" alt />
      </figure>
    </div>
    <section>
      <div class="container">
        <div class="columns">
          <div class="column is-5 trip-title">
            <figure class="image is-64x64">
              <img class="is-rounded" src="../assets/thomas.png" />
            </figure>
            <h1 class="title">Aqui empieza la descripción de la exxxxxxxxxxxxcursiooonasaaa</h1>
            <h2 class="subtitle">Excursión al teide organizada por Tui</h2>
          </div>
          <div class="column">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. ç
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type spe
              cimen book. It has survived not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
              release of Letraset sheets containing Lorem Ipsum passages, and more recently with deskt
              op publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
        <Collage />
      </div>
    </section>
    <section>
      <div class="container">
        <div class="columns books">
          <div class="column is-8">
            <Conditions />
          </div>
          <div class="column is-4">
            <Book />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="maps">
          <GoogleMapsClients />
        </div>
      </div>
    </section>
    <section>
      <br />
      <div class="container">
        <div class="columns">
          <div class="column is-9">
            <Reviews :show="false" />
            <Reviews :show="true" response="standard dummy text ever since the 
            1500s, when an unknown printer took a galley of type and scrambled it 
            to make a type specimen book"/>
          </div>
          <div class="column is-3 similar">
            <SimilarTrips />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Collage from "../components/Trip/Collage";
import Book from "../components/Trip/Book";
import Conditions from "../components/Trip/Conditions";
import GoogleMapsClients from "../components/Trip/GoogleMapsClients";
import Reviews from "../components/Trip/Reviews";
import SimilarTrips from "../components/Trip/SimilarTrips";

export default {
  data: () => {
    return {
      title: "",
      description: "",
      photos: [],
      mainPhoto: ""
    };
  },

  components: {
    Collage,
    Book,
    Conditions,
    GoogleMapsClients,
    Reviews,
    SimilarTrips
  }
};
</script>

<style lang="scss" scoped>
.columns {
  margin: 3% 0%;
}

.maps {
  margin: auto;
}

.similar {
  padding-top: 0px;
}

.trip-title{

}

</style>