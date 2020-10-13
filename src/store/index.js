import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 1
  },
  mutations: {
    SET_VERSION(state) {
      state.count++
    }
  },
  actions: {
    increment(context) {
      setTimeout(() => {
        context.commit('SET_VERSION')
      }, 1000)
    }
  }
})
