import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: '查看',
    isShow: true
  },
  getters: {
    getTitle: function (state) {
      return state.title
    }
  },
  mutations: {
    showCode: function (state, payload) {
      const code = document.getElementById(payload)
      if (state.isShow) {
        code.style.display = 'block'
        state.isShow = false
        state.title = '收起'
      } else {
        code.style.display = 'none'
        state.isShow = true
        state.title = '查看'
      }
    }
  },
  actions: {

  }
})
