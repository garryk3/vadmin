import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import * as actions from './actions';
import * as getters from './getters';
import admin from './modules/admin';

Vue.use(Vuex);

const store = () => new Vuex.Store({
  plugins: [createLogger()],
  strict: process.env.NODE_ENV !== 'production',
  actions,
  getters,
  modules: {
    admin
  },

  state: {},
  mutations: {}
});

export default store;
