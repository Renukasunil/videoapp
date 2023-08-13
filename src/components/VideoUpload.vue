<template>
  <div>
    <input type="file" @change="uploadVideo" />
  </div>
</template>

<script>
import axios from 'axios'; // Import the axios library

export default {
  methods: {
    uploadVideo(event) {
      const selectedFile = event.target.files[0];

      const formData = new FormData();
      formData.append('video', selectedFile);

      axios.post('/upload', formData)
        .then(response => {
          console.log('Upload successful', response.data);
        })
        .catch(error => {
          console.error('Upload error', error);
        });
    }
  }
}
</script>
