// store.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    uploadedVideo: null,
    subtitles: []
  },
  mutations: {
    setUploadedVideo(state, video) {
      state.uploadedVideo = video;
    },
    addSubtitle(state, subtitle) {
      state.subtitles.push(subtitle);
    }
  },
  actions: {
    uploadVideo({ commit }, file) {
      // Implement logic to upload video and setUploadedVideo mutation
    },
    addSubtitle({ commit }, subtitle) {
      // Implement logic to add subtitle and addSubtitle mutation
    }
  }
});
