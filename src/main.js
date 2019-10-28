import Vue from 'vue';
import App from './App.vue';
import Buefy from 'buefy';
import router from './routes/index';
import * as VueGoogleMaps from "vue2-google-maps";
import { store } from './store';

Vue.use(VueGoogleMaps, {
  load: {
    key: "",
    libraries: "places"
  }
});

Vue.use(Buefy);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
