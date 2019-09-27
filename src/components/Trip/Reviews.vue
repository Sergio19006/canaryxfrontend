<template>
  <div>
    <div class="columns review">
      <div class="column is-2">
        <div class="profile">
          <figure class="image is-96x96">
            <img class="is-rounded" src="../../assets/perfil.jpg" />
          </figure>
          <div class="subtitle">Sergio</div>
        </div>
      </div>
      <div class="column is-10">
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
        <div class="columns">
          <div class="column response">
            <b-field>
              <b-input
                type="textarea"
                minlength="10"
                maxlength="300"
                placeholder="Add here your response to this review"
              ></b-input>
            </b-field>
            <button @click="addResponse" class="button">Response</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      response: ""
    };
  },
  methods: {
    addResponse() {
      const response = document.querySelector(".response").replaceWith;
      console.log("hola", response);
    },

    extendInput() {
      document.querySelector(".input-response").classList.add();
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

.review {
  box-shadow: 1px -1px 16px -1px rgba(0, 0, 0, 0.25);
  background-color: beige;
}

.subtitle {
  margin-top: 2%;
}
</style>