import { HTTP } from './default'

export default {
  getPosts (params) {
    return HTTP({
      url: '/posts',
      method: 'GET',
      params
    })
  },
  getPost (id) {
    return HTTP({
      url: `/posts/${id}`,
      method: 'GET'
    })
  },
  getComments (id) {
    return HTTP({
      url: `/posts/${id}/comments`,
      method: 'GET'
    })
  },
  updateText ({id, data}) {
    return HTTP({
      url: `/posts/${id}`,
      method: 'PATCH',
      data
    })
  }
}
