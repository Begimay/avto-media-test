import { HTTP } from './default'

export default {
  getPosts (params) {
    return HTTP({
      url: 'https://jsonplaceholder.typicode.com/posts',
      method: 'GET',
      params
    })
  },
  getPost (id) {
    return HTTP({
      url: `https://jsonplaceholder.typicode.com/posts/${id}`,
      method: 'GET'
    })
  },
  getComments (id) {
    return HTTP({
      url: `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
      method: 'GET'
    })
  },
  updateText ({id, data}) {
    return HTTP({
      url: `https://jsonplaceholder.typicode.com/posts/${id}`,
      method: 'PATCH',
      data
    })
  }
}
