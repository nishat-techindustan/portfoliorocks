/* eslint no-trailing-spaces: "off" */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    images: [],
    imageLoading: false
  },
  mutations: {
    getImageData(state, payload) {
      state.images = [...payload]
    },
    imageLoading(state, loading) {
      state.imageLoading = loading
    }
  },
  actions: {
    async getImages(context) {
      context.commit('imageLoading', true)
      try {
        const images = await axios.get('https://pixabay.com/api/?key=18356203-30d50d743f7e0a98fd4759a1c')
        context.commit('imageLoading', false)
        context.commit('getImageData', images.data.hits)

      } catch (error) {
        console.error(error, 'error')
        context.commit('imageLoading', false)
      }
    }
  },
  modules: {
  }
})
