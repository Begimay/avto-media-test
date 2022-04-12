import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import posts from './posts'

const debug = process.env.NODE_ENV !== 'production'

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

export const strict = debug
