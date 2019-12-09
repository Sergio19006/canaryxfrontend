<template>
  <div class="body">
    <div class="columns">
      <div class="column is-4 is-offset-4">
        <form class="form">
          <div class="modal-card" style="width: auto">
            <header class="modal-card-head">
              <h3 class="title">Sign Up</h3>
            </header>
            <section class="modal-card-body">
              <b-field label="Email">
                <b-input
                  type="email"
                  :value="email"
                  placeholder="Your email"
                  v-model="email"
                  required
                ></b-input>
              </b-field>
              <b-field label="Password">
                <b-input
                  type="password"
                  :value="password"
                  v-model="password"
                  password-reveal
                  placeholder="Your password"
                  required
                ></b-input>
              </b-field>
              <b-field label="Repeat Password">
                <b-input
                  type="password"
                  :value="password"
                  v-model="repeatPass"
                  password-reveal
                  placeholder="Repeat Your password"
                  required
                ></b-input>
              </b-field>
              <div class="business">
                <b-field>
                  <b-switch @click.native="isBusiness()" v-model="business">Business</b-switch>
                </b-field>
              </div>
              <div class="div-logo hidden">
                <b-field class="file">
                  <b-upload v-model="file">
                    <a class="button is-primary">
                      <b-icon icon="upload"></b-icon>
                      <span>Click to upload the logo</span>
                    </a>
                  </b-upload>
                  <span class="file-name" v-if="file">{{ file.name }}</span>
                </b-field>
                <b-field class="description" label="Business description">
                  <b-input maxlength="200" type="textarea"></b-input>
                </b-field>
              </div>
            </section>
            <footer class="modal-card-foot">
              <button class="button is-primary">Sign up</button>
            </footer>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      business: false,
      email: "",
      password: "",
      repeatPass: "",
      file: null
    };
  },

  methods: {
    isBusiness() {
      document.querySelector(".div-logo").classList.toggle("hidden");
    }
  }
};
</script>

<style lang="scss" scoped>
.body {
  width: 100vw;
  height: 48vw;
  background-image: url("../assets/mercedes.jpg");
  background-repeat: no-repeat;
  background-size: 100%, auto;
}

.description {
  width: 100%;
}

.file {
  padding-top: 5%;
}

.div-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.hidden {
  //transform: scale(0, 0);
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

.left {
  display: flex;
  justify-content: flex-start;
  margin-top: 3%;
}

.column {
  margin-top: 20px;
}

.form {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
}

.modal-card-foot {
  justify-content: center;
}

.modal-card-head {
  justify-content: center;
}
@media only screen and (max-width: 450px) {
  .form {
    margin-top: 35vw;
  }
  .modal-card {
    margin: 0;
  }
  .modal-card-head {
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }
}
</style>