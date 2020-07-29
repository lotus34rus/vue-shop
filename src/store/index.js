import Vue from 'vue'
import Vuex from 'vuex'

import shop from './shop'
import auth from './auth'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    shop, auth
  }
})
