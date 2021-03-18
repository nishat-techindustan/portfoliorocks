/* eslint no-trailing-spaces: "off" */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    images: [],
    imageLoading: false,
    singleImageData: {},
    openModal: false,
    videos: [],
    videoLoading: false
  },
  mutations: {
    getImageData(state, payload) {
      state.images = [...payload]
    },
    imageLoading(state, loading) {
      state.imageLoading = loading
    },
    getVideoData(state, payload) {
      state.videos = [...payload]
    },
    videoLoading(state, loading) {
      state.loading = loading
    },
    showModal(state, show) {
      state.openModal = show
    },
    showSingleImageData(state, index) {
      state.singleImageData = state.images.find(image => image.id === index)
      console.log(state.singleImageData, 'state.singleImageData')
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
        console.error(error, 'error on image loading')
        context.commit('imageLoading', false)
      }
    },
    showModel(context, payload) {
      context.commit('showModal', payload.show)
      context.commit('showSingleImageData', payload.id)
    },
    async getVideos(context) {
      context.commit('videoLoading', true)
      try {
        const videos = await axios.get('https://pixabay.com/api/videos/?key=18356203-30d50d743f7e0a98fd4759a1c')
        context.commit('videoLoading', false)
        console.log(videos.data.hits)
        context.commit('getVideoData', videos.data.hits)
      } catch (error) {
        console.error(error, 'error on video loading')
        context.commit('videoLoading', false)
      }
    }
  },
  modules: {
  }
})
