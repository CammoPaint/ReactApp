import {HTTP} from '../services/base.http'

export default {
  get (success, error) {
    HTTP.get('posts')
      .then(response => {
        success(response.data)
      })
      .catch(e => {
        error(e)
      })
  },
  post (data, success, error) {
    HTTP.post('posts', data)
      .then(response => {
        success(response.data)
      })
      .catch(e => {
        error(e)
      })
  }
}
