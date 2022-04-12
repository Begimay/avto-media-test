import PostsApi from '~/api/posts'

const state = () => ({
  posts: [],
  post: null,
  comments: []
})

const actions = {
  getPosts ({ commit }, params) {
    return new Promise((resolve) => {
      PostsApi.getPosts(params)
        .then(response => response.data)
        .then((result) => {
          commit('setPosts', result)
          resolve(result)
        })
    })
  },
  getPost ({ commit }, id) {
    return new Promise((resolve) => {
      PostsApi.getPost(id)
        .then(response => response.data)
        .then((result) => {
          commit('setPost', result)
          resolve(result)
        })
    })
  },
  getComments ({ commit }, id) {
    return new Promise((resolve) => {
      PostsApi.getComments(id)
        .then(response => response.data)
        .then((result) => {
          commit('setComments', result)
          resolve(result)
        })
    })
  },
  updateText ({ commit }, {id, data}) {
    return new Promise((resolve) => {
      PostsApi.updateText({id, data})
        .then(response => response.data)
        .then((result) => {
          commit('setPost', result)
          resolve(result)
        })
    })
  }
}

const mutations = {
  setPosts (state, posts) {
    state.posts = posts
  },
  setPost (state, post) {
    state.post = post
  },
  setComments (state, comments) {
    state.comments = comments
  },
  setUpdatedText (state, comments) {
    state.comments = comments
  }
}

const getters = {
  getPosts: state => state.posts,
  getPost: state => state.post,
  getComments: state => state.comments,
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
