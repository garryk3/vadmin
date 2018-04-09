import http from 'blocks/http';
import standartSchema from './schema-standart';

const state = {
  schemas: {
    standart: standartSchema
  }
};

const getters = {};

const actions = {
  saveSchema({ commit, data }) {
    commit('saveSchema', data);
  }
};

const mutations = {
  saveSchema(state, data) {
    state.schemas = {
      ...state.schemas,
      data
    };
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
};
