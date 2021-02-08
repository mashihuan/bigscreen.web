import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import getters from './getters'
import theme from './modules/theme'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters,
  modules: {
    theme
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage
    })
  ]
})
