import Vue from 'vue';
import VueRouter from 'vue-router';
import Explorer from '../views/Explorer';
import Login from '../views/Login';
import Signup from '../views/Signup';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Explorer },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
]
export default new VueRouter({ routes });

