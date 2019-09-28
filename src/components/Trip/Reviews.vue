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
        <div class="comment">
          Lorem Ipsum is simply dummy text
          of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown
          printer took a galley of type
          and scrambled it to make a type specimen book
        </div>
        <div class="columns response">
          <div v-if="!show" class="column text-area">
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
          <div v-if="show" class="column is-2">
            <figure class="image is-64x64">
              <img class="is-rounded" src="../../assets/thomas.png" />
            </figure>
          </div>
          <div v-if="show" class="column is-10 mess">{{response}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: Boolean,
    response: String
  },

  data: () => {
    return {
      //response: ""
    };
  },
  methods: {
    addResponse(id) {
      this.show = true;
      //Send to back
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