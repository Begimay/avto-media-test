import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import posts from './posts'

Vue.use(Vuex)

export default () => {
  return new Store({
    actions: {
      nuxtServerInit ({ commit }, { req }) {}
    },
    modules: {
      posts
    }
  })
}
