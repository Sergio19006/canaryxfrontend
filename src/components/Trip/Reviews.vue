<template>
  <div>
    <div class="columns review">
      <div class="column is-2">
        <div class="profile">
          <figure class="image is-64x64">
            <img class="is-rounded" src="../../assets/perfil.jpg" />
          </figure>
          <div class="subtitle">Sergio</div>
        </div>
      </div>
      <div class="column is-9">
        <div class="rating">
          <b-icon v-for="item in 5" :key="item" icon="star" size="is-small"></b-icon>
        </div>
        <div v-if="showReview" class="comment">{{review}} </div>
        <div v-if="!showReview" class="comment">
          <b-field>
              <b-input
                v-model="review"
                type="textarea"
                minlength="10"
                maxlength="300"
                placeholder="Add here your review"
              ></b-input>
            </b-field>
            <button @click="addReview" class="button">Review</button>
        </div>
        <div class="columns response">
          <div v-if="!showResponse" class="column text-area">
            <b-field>
              <b-input
                v-model="response"
                type="textarea"
                minlength="10"
                maxlength="300"
                placeholder="Add here your response to this review"
              ></b-input>
            </b-field>
            <button @click="addResponse" class="button">Response</button>
          </div>
          <div v-if="showResponse" class="column is-2">
            <figure class="image is-64x64">
              <img class="is-rounded" src="../../assets/thomas.png" />
            </figure>
          </div>
          <div v-if="showResponse" class="column is-10 mess">{{response}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showResponse: Boolean,
    response: String,
    showReview: Boolean,
    review: String
  },

  data: () => {
    return {
    };
  },
  methods: {
     addResponse() {
      this.showResponse = true;
    },
    addReview(){
      this.showReview = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.profile {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.subtitle {
  margin-top: 2%;
}

.mess {
  margin-top: 3%;
}
</style>