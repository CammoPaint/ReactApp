import {HTTP} from '../services/base.http'

export default {
  get (success, error) {
    HTTP.get('users')
      .then(response => {
        success(response.data)
      })
      .catch(e => {
        error(e)
      })
  }
}
