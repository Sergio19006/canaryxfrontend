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
            <h1 class="title">{{title}}</h1>
            <h2 class="subtitle">Trip to {{place}} organizated by {{owner}}</h2>
          </div>
          <div class="column">
            <p>
              {{description}}
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
            <Conditions :transport = transport
                        :place = place
                        :type = type
                        :totalPersons = totalPersons
                        :guide = guide
                        :lunch = lunch
                        :hour = hour
                        :date = date
                        :island = island
                        :participants = participants
                        :avgScore = avgScore
                        :organizator = organizator
                        :conditions = conditions />
          </div>
          <div class="column is-4">
            <Book :d=date />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="maps">
          <GoogleMapsClients :coordenates = coordenates />
        </div>
      </div>
    </section>
    <section>
      <br />
      <div class="container">
        <div class="columns">
          <div class="column is-9" ref="reviews">
            <button class="button is-primary review" @click="addReview()">Add new review</button>
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
import Vue from 'vue'
import Collage from "../components/Trip/Collage";
import Book from "../components/Trip/Book";
import Conditions from "../components/Trip/Conditions";
import GoogleMapsClients from "../components/Trip/GoogleMapsClients";
import Reviews from "../components/Trip/Reviews";
import SimilarTrips from "../components/Trip/SimilarTrips";

export default {
  props: {
    _id: String
  },

  data: () => {
    return {
      transport: true,
      place: "Teide",
      type: 'Walk',
      totalPersons: 20,
      guide: "Socio",
      lunch: true,
      hour: "11:00",
      date: '2019-10-25',
      reviews: [],
      island: "Tenerife",
      participants: 10,
      avgScore: 5.5,
      organizator: 'Tui',
      conditions: ['Esto es una condicion00','Esto es otra condicion','y esta es la ultima condicion'],
      images: [],
      price: 55,
      coordenates: { lat: 28.2723384, lng: -16.64250800000002 },
      owner: "Tui",
      logo:"../assets/thomas.png",
      title: "Excursionaza al teide papu",
      description: "Descripotion ofhvgofghoi",
    };
  },

  methods:{
    addReview(){
      const ComponentClass = Vue.extend(Reviews)
      let instance = new ComponentClass({
          propsData: { showResponse: false,
                        showReview: false,
                      }
        })
        instance.$mount();
        this.$refs.reviews.appendChild(instance.$el);
        let button = document.querySelector('.review');
        button.remove();
        this.$refs.reviews.appendChild(button);
        
    }
  },

  components: {
    Collage,
    Book,
    Conditions,
    GoogleMapsClients,
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

</style>