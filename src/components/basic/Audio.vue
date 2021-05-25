<!----------------------------->
<!-- Audio : basic component -->
<!----------------------------->

<template>
  <audio controls>
    <source :src="src"
      :type="type">
  </audio>
</template>

<script>
  export default {
    name: "Audio",
    props: {
      src: {
        type: String,
        required: true
      },
      type: {
        type: String,
        default: "audio/mpeg"
      }
    }
  }
</script>

<style lang="scss" scoped>
  audio {
    display: block;
    margin: 20px auto;
    border: thin solid var(--black);
    border-radius: 5px;
  }
</style>
