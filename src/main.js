import Vue from 'vue';
import App from './App.vue';
import Buefy from 'buefy';
import router from './routes';
import * as VueGoogleMaps from "vue2-google-maps";
import axios from 'axios';
import { store } from './store';

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GOOGLE_MAPS_API_KEY,
    libraries: "places"
  }
});

Vue.prototype.$http = axios

Vue.use(Buefy);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
