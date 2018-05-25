import { API } from '@/api/config'
import movies from '@/api/movies'

export default class ApiWrapper {
  constructor (options = {}) {
    this.apiURL = options.apiURL || API.PRODUCT_URL

    this.movies = movies.bind(this)()
  }

  request (url) {
    const headers = {}
    return fetch(`${API.base_url}/spaces/${API.space_id}/environments/${API.environment_id}/${url}?access_token=${API.access_token_live}`, headers)
      .then((data) => {
        return data.json()
      })
      .catch((rej) => {
      })
  }
}
