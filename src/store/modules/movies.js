import ApiWrapper from '@/api'
import * as types from '../mutation-types'

const API = new ApiWrapper()

// initial state
const state = {
  list: [],
}

// getters
const getters = {
  list: state => state.list,
}

// actions
const actions = {
  loadMovies ({commit}) {
    API.movies.getList()
      .then(response => {
        const movieData = response.items.map((item) => {
          return {
            longDescription: item.fields.longDescription,
            name: item.fields.name,
            releaseYear: item.fields.releaseYear,
            shortDescription: item.fields.shortDescription,
          }
        })
        commit(types.LOAD_MOVIE_DATA, movieData)
      })
  },
}

// mutations
const mutations = {
  [types.LOAD_MOVIE_DATA] (state, movieData) {
    console.log('movieData', movieData)
    state.list = movieData
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
