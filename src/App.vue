<template>
  <div>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
    <VideoUpload />
    <SubtitleEditor />
    <VideoPlayer :videoSrc="uploadedVideo" :subtitles="subtitles" />
  </div>
</template>

<script>
import VideoUpload from './components/VideoUpload.vue';
import SubtitleEditor from './components/SubtitleEditor.vue';
import VideoPlayer from './components/VideoPlayer.vue';

export default {
   name: 'App',
  components: {
    VideoUpload,
    SubtitleEditor,
    VideoPlayer
  }
}
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
