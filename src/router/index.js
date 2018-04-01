import Vue from 'vue';
import Router from 'vue-router';
import Admin from 'routes/admin';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    }
  ]
});
