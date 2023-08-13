<template>
  <div>
    <video ref="videoElement" controls @timeupdate="syncSubtitles">
      <source :src="videoSrc" type="video/mp4" />
    </video>
    <div v-for="subtitle in subtitles" :key="subtitle.timestamp">
      {{ subtitle.text }}
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      videoSrc: '', // Your video source
      subtitles: []
    };
  },
  methods: {
    fetchSubtitles() {
      const videoId = 'video1'; // Replace with the actual video identifier
      axios.get(`/get_subtitles/${videoId}`)
        .then(response => {
          this.subtitles = response.data.subtitles;
        })
        .catch(error => {
          console.error('Error fetching subtitles', error);
        });
    },
    syncSubtitles() {
      // Implement logic to sync subtitles with video time
    }
  },
  created() {
    this.fetchSubtitles();
  }
};
</script>
