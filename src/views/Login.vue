<template>
  <div>
    <div class="body">
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <div class="form">
            <div class="modal-card" style="width: auto">
              <header class="modal-card-head">
                <h3 class="title">Login</h3>
              </header>
              <section class="modal-card-body">
                <b-field label="Email">
                  <b-input
                    v-model="email"
                    type="email"
                    :value="email"
                    placeholder="Your email"
                    required
                  ></b-input>
                </b-field>
                <b-field label="Password">
                  <b-input
                    type="password"
                    v-model="password"
                    :value="password"
                    password-reveal
                    placeholder="Your password"
                    required
                  ></b-input>
                </b-field>
                <div class="left">
                  <b-checkbox class="left">Remember me</b-checkbox>
                </div>
              </section>
              <footer class="modal-card-foot">
                <button @click="login()" class="button is-primary">Login</button>
              </footer>
            </div>
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
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {

        const data = {
          email: this.email,
          password: this.password
        }
        
        const response = await this.$http.post(
        `${process.env.VUE_APP_API}/api/v1/users/login`, data);

        if(response.data != null){
          this.$store.commit("setEmail", this.email);
          this.$router.push('/');
          window.location.reload();
        }
      } 
  }
};
</script>

<style lang="scss" scoped>
.body {
  width: 100vw;
  height: 48vw;
  background-repeat: no-repeat;
  background-image: url("../assets/barranco-masca.jpg");
  background-size: 100%, auto;
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
