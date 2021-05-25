<!----------------------------->
<!-- Video : basic component -->
<!----------------------------->

<template>
  <video controls
    :width="width">
    <source :src="src"
      :type="type">
  </video>
</template>

<script>
  export default {
    name: "Video",
    props: {
      src: {
        type: String,
        required: true
      },
      type: {
        type: String,
        default: "video/webm"
      },
      width: {
        type: String,
        default: "500"
      }
    }
  }
</script>

<style lang="scss" scoped>
  video {
    display: block;
    margin: 20px auto;
    border: thin solid var(--gray);
    border-radius: 5px;
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }
</style>
