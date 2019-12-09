import Vue from 'vue';
import VueRouter from 'vue-router';
import Explorer from '../views/Explorer';
import Login from '../views/Login';
import Signup from '../views/Signup';
import Trip from '../views/Trip';
import Experience from '../views/Experience';
import NewTrip from '../views/NewTrip';
import Admin from '../views/Admin';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Explorer },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '/trip', component: Trip },
  { path: '/experience', component: Experience },
  { path: '/newtrip', component: NewTrip },
  { path: '/admin', component: Admin },
]
export default new VueRouter({ routes });

