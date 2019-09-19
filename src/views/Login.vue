<template>
  <div class="body">
    <div class="columns">
      <div class="column is-4 is-offset-4">
        <form class="form">
          <div class="modal-card" style="width: auto">
            <header class="modal-card-head">
              <!-- <p class="modal-card-title">Login</p> -->
              <h3 class="title">Login</h3>
            </header>
            <section class="modal-card-body">
              <b-field label="Email">
                <b-input type="email" :value="email" placeholder="Your email" required></b-input>
              </b-field>
              <b-field label="Password">
                <b-input
                  type="password"
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
              <button class="button is-primary">Login</button>
            </footer>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.body {
  width: 100vw;
  height: 50vw;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)),
    url("../assets/barranco-masca.jpg");
  background-repeat: no-repeat;
  background-size: 100%, auto;
}

.left {
  display: flex;
  justify-content: start;
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