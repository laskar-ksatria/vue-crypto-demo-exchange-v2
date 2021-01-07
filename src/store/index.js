import Vue from 'vue'
import Vuex from 'vuex'

export * from './utils'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    coins: null,
  },
  mutations: {
    setCoins(state, value) {
      state.coins = value
    }
  },
  actions: {
    coinsSet({ commit }, value) {
      commit("setCoins", value)
    }
  },
  modules: {
  }
})
